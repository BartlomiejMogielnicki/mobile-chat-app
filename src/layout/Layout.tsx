import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

import { LayoutProps } from "../types";
import Body from "./Body";
import Header from "./Header";

const Layout: FC<LayoutProps> = ({ text, children }) => (
  <View style={styles.container}>
    <Header text={text} />
    <Body>{children}</Body>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Layout;
