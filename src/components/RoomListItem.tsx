import React, { FC } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { colors } from "../theme/index";
import { RoomListItemProps } from "../types/index";

const RoomListItem: FC<RoomListItemProps> = ({
  id,
  name,
  roomPic,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(id, name)}
    >
      {roomPic ? (
        <Image
          style={styles.roomLogo}
          source={{
            uri: roomPic,
          }}
        />
      ) : null}
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    maxWidth: "95%",
    minHeight: 100,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: colors.primaryColor,
    borderRadius: 50,
    borderWidth: 1,
  },
  roomLogo: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  text: {
    width: "100%",
    flexShrink: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
  },
  unknownLogo: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderRadius: 37.5,
    borderColor: colors.primaryColor,
  },
});

export default RoomListItem;
