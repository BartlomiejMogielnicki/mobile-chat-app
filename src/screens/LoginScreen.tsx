import { useMutation } from "@apollo/client";
import React, { FC, useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import Body from "../components/Body";
import Form from "../components/Form";
import Header from "../components/Header";
import { UserContext } from "../context/UserContext";
import { LOG_IN } from "../queries/index";
import { LoginScreenProps } from "../types/index";

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  const { token, handleSetUser, handleSetToken } = useContext(UserContext);
  const [login, { data, loading, error }] = useMutation(LOG_IN);

  const handleLogin = (email: string, password: string) => {
    login({
      variables: { email, password },
    });
  };

  // Logout user if return from HomeScreen
  useEffect(() => {
    handleSetUser({
      id: "",
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      profilePic: "",
    });
    handleSetToken("");
  }, []);

  useEffect(() => {
    if (data) {
      handleSetUser(data.loginUser.user);
      handleSetToken(data.loginUser.token);
    }
  }, [data]);

  useEffect(() => {
    if (token) {
      navigation.navigate("Home");
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <Header text="Please Log In" />
      <Body>
        <Form handleLogin={handleLogin} />
        {loading && <Text>Loading...</Text>}
        {error && <Text>Ooops... something went wrong. Please try again.</Text>}
      </Body>
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
