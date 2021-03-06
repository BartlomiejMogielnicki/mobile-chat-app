import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

const Body: FC = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "#fff",
  },
});

export default Body;
