import React, { FC } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import { colors } from "../theme/index";
import { RoomListItemProps } from "../types/index";

const RoomListItem: FC<RoomListItemProps> = ({ id, name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Button
        title="Enter"
        onPress={() => console.log(id)}
        color={colors.primaryColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    minHeight: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primaryColor,
    borderRadius: 20,
    borderWidth: 2,
  },
  text: {
    marginBottom: 10,
    color: "#000",
  },
});

export default RoomListItem;
