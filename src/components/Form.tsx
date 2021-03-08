import { Formik } from "formik";
import React, { FC } from "react";
import { Button, TextInput, View, Text, StyleSheet } from "react-native";

import { colors } from "../theme/index";
import { LoginFormProps } from "../types/index";

const Form: FC<LoginFormProps> = ({ handleLogin }) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={({ email, password }, { resetForm }) => {
      if (email || password) {
        handleLogin(email, password);
        resetForm({});
      }
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            style={styles.input}
            placeholder="Please enter e-mail"
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            style={styles.input}
            placeholder="Please enter password"
            secureTextEntry
          />
        </View>
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    width: 250,
    height: 40,
    borderColor: colors.primaryColor,
    borderRadius: 5,
    borderWidth: 2,
    fontSize: 16,
  },
  section: {
    marginBottom: 30,
  },
  text: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 16,
  },
});

export default Form;
