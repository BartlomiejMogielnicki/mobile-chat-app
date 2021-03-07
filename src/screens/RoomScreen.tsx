import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import Body from "../components/Body";
import Header from "../components/Header";
import { GET_MESSAGES } from "../queries";
import { RoomScreenProps } from "../types/index";

const RoomScreen: FC<RoomScreenProps> = ({ navigation, route }) => {
  const { id, name } = route.params;
  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: { id },
  });
  console.log(data);

  return (
    <View style={styles.container}>
      <Header text={name} />
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
