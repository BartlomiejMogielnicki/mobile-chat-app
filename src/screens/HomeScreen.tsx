import React, { FC } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Body from "../components/Body";
import Header from "../components/Header";
import { HomeScreenProps } from "../types/index";

const HomeScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
  const rooms = route.params;
  console.log(rooms);
  return (
    <View style={styles.container}>
      <Header text="Pick a room" />
      <Body>
        <Text>HomeScreen</Text>
        <Button
          title="Go to chat room"
          onPress={() => navigation.navigate("Room")}
        />
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

export default HomeScreen;
