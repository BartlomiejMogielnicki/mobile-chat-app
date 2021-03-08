import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import RoomListItem from "../components/RoomListItem";
import Layout from "../layout/Layout";
import { GET_ROOMS } from "../queries";
import { HomeScreenProps } from "../types/index";

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_ROOMS);

  const handleItemPress = (id: string, name: string) => {
    navigation.navigate("Room", {
      id,
      name,
    });
  };

  return (
    <View style={styles.container}>
      <Layout text="Pick a room">
        <View style={styles.listContainer}>
          {loading && <Text>Loading...</Text>}
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
          {error && <Text>Ooops... something went wrong</Text>}
        </View>
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
  listContainer: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
