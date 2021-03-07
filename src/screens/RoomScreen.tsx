import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import Body from "../components/Body";
import Chat from "../components/Chat";
import Header from "../components/Header";
import { RoomScreenProps } from "../types/index";

const RoomScreen: FC<RoomScreenProps> = ({ route }) => {
  const { id, name } = route.params;

  return (
    <View style={styles.container}>
      <Header text={name} />
      <Body>
        <Chat id={id} />
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
