import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";

import Layout from "../layout/Layout";

const SignupScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Layout text="Sign Up">
        <Text>SignupScreen</Text>
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
