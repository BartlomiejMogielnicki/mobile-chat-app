import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";

import { colors } from "../theme/index";

interface Props {
  text: string;
}

const Header: FC<Props> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: colors.primaryColor,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
  titleContainer: {
    paddingBottom: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
