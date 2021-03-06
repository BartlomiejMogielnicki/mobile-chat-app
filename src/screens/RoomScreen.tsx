import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import Body from "../components/Body";
import Header from "../components/Header";

const RoomScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Header text="Room name" />
      <Body>
        <Text>RoomScreen</Text>
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

export default RoomScreen;
