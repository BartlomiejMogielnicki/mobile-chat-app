import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import Chat from "../components/Chat";
import Layout from "../layout/Layout";
import { RoomScreenProps } from "../types/index";

const RoomScreen: FC<RoomScreenProps> = ({ route }) => {
  const { id, name } = route.params;

  return (
    <View style={styles.container}>
      <Layout text={name}>
        <Chat id={id} />
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

export default RoomScreen;
