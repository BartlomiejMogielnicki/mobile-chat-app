import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

import Body from "../components/Body";
import Form from "../components/Form";
import Header from "../components/Header";

const LoginScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Header text="Please Log In" />
      <Body>
        <Form />
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
