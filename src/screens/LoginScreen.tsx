import { useMutation } from "@apollo/client";
import React, { FC, useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import {
  getTokenFromAsyncStorage,
  saveTokenInAsyncStorage,
  removeTokenFromAsyncStorage,
} from "../asyncStorage";
import Form from "../components/Form";
import { UserContext } from "../context/UserContext";
import Layout from "../layout/Layout";
import { LOG_IN } from "../queries/index";
import { LoginScreenProps } from "../types/index";

const LoginScreen: FC<LoginScreenProps> = ({ navigation, route }) => {
  const { token, handleSetUser, handleSetToken } = useContext(UserContext);
  const [login, { data, loading, error }] = useMutation(LOG_IN);

  const handleLogin = (email: string, password: string) => {
    login({
      variables: { email, password },
    });
  };

  const checkTokenStorage = async () => {
    const token = await getTokenFromAsyncStorage();
    if (token) {
      handleSetToken(token);
    }
  };

  useEffect(() => {
    checkTokenStorage();
  }, []);

  // Handle user logout
  useEffect(() => {
    if (route.params && route.params.action === "logout") {
      handleSetToken("");
      handleSetUser({
        id: "",
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        profilePic: "",
      });
    }

    removeTokenFromAsyncStorage();
  }, [route.params]);

  useEffect(() => {
    if (data) {
      handleSetUser(data.loginUser.user);
      handleSetToken(data.loginUser.token);

      saveTokenInAsyncStorage(data.loginUser.token);
    }
  }, [data]);

  useEffect(() => {
    if (token) {
      navigation.navigate("Home");
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <Layout text="Log In">
        <Form handleLogin={handleLogin} />
        {loading && <Text>Loading...</Text>}
        {error && <Text>Ooops... something went wrong. Please try again.</Text>}
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
