import { useQuery } from "@apollo/client";
import React, { FC, useContext, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Body from "../components/Body";
import Header from "../components/Header";
import RoomListItem from "../components/RoomListItem";
import { UserContext } from "../context/UserContext";
import { GET_ROOMS } from "../queries";
import { HomeScreenProps } from "../types/index";

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const { handleSetUser } = useContext(UserContext);

  const { loading, error, data } = useQuery(GET_ROOMS);

  useEffect(() => {
    if (data) {
      handleSetUser(data.usersRooms.user);
    }
  }, [data]);

  const handleItemPress = (id: string, name: string) => {
    navigation.navigate("Room", {
      id,
      name,
    });
  };

  return (
    <View style={styles.container}>
      <Header text="Pick a room" />
      <Body>
        <View style={styles.listContainer}>
          {data && (
            <FlatList
              data={data.usersRooms.rooms}
              renderItem={({ item }) => (
                <RoomListItem
                  id={item.id}
                  name={item.name}
                  roomPic={item.roomPic}
                  onPress={handleItemPress}
                />
              )}
            />
          )}
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
