import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

import SignupForm from "../components/SignupForm";
import Layout from "../layout/Layout";

const SignupScreen: FC = () => {
  const handleSignup = (
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordConfirm: string
  ) => {
    console.log(email, firstName, lastName, password, passwordConfirm);
  };

  return (
    <View style={styles.container}>
      <Layout text="Sign Up">
        <SignupForm handleSignup={handleSignup} />
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

export default SignupScreen;
