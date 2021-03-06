import React, { FC } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Body from "../components/Body";
import Header from "../components/Header";
import RoomListItem from "../components/RoomListItem";
import { HomeScreenProps } from "../types/index";

const HomeScreen: FC<HomeScreenProps> = ({ route }) => {
  const rooms = Object.values(route.params);
  return (
    <View style={styles.container}>
      <Header text="Pick a room" />
      <Body>
        <View style={styles.listContainer}>
          <FlatList
            data={rooms}
            renderItem={({ item }) => (
              <RoomListItem id={item.id} name={item.name} />
            )}
          />
        </View>
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
  listContainer: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
