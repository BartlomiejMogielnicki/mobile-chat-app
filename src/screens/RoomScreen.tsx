import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const RoomScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>RoomScreen</Text>
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
