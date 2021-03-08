import React, { FC, useContext } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { UserContext } from "../context/UserContext";
import { colors } from "../theme/index";

interface Props {
  text: string;
}

const Header: FC<Props> = ({ text }) => {
  const {
    user: { profilePic },
  } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {profilePic ? (
          <>
            <Text style={styles.title}>{text}</Text>
            <Image
              style={styles.profilePic}
              source={{
                uri: profilePic,
              }}
            />
          </>
        ) : (
          <Text style={styles.titleCenter}>{text}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: colors.primaryColor,
  },
  profilePic: {
    marginLeft: "auto",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    marginLeft: "auto",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    flexShrink: 1,
  },
  titleCenter: {
    width: "100%",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  titleContainer: {
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Header;
