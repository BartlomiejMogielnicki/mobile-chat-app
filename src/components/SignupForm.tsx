import { Formik } from "formik";
import React, { FC } from "react";
import { Button, TextInput, View, Text, StyleSheet } from "react-native";

import { colors } from "../theme/index";

const SignupForm: FC = () => (
  <Formik
    initialValues={{
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirm: "",
    }}
    onSubmit={({ email, password }, { resetForm }) => {
      if (email && password) {
        console.log("Signup");
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
          <Text style={styles.text}>First name</Text>
          <TextInput
            onChangeText={handleChange("firstName")}
            onBlur={handleBlur("firstName")}
            value={values.firstName}
            style={styles.input}
            placeholder="Please enter first name"
            secureTextEntry
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Last name</Text>
          <TextInput
            onChangeText={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
            value={values.lastName}
            style={styles.input}
            placeholder="Please enter last name"
            secureTextEntry
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
        <View style={styles.section}>
          <Text style={styles.text}>Confirm password</Text>
          <TextInput
            onChangeText={handleChange("passwordConfirm")}
            onBlur={handleBlur("passwordConfirm")}
            value={values.passwordConfirm}
            style={styles.input}
            placeholder="Please confirm password"
            secureTextEntry
          />
        </View>
        <Button onPress={() => handleSubmit} title="Submit" />
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

export default SignupForm;
