import { useQuery, useMutation } from "@apollo/client";
import React, { FC, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

import { UserContext } from "../context/UserContext";
import { GET_MESSAGES, SEND_MESSAGE } from "../queries";
import { ChatProps, Message } from "../types/index";

const Chat: FC<ChatProps> = ({ id }) => {
  const { user } = useContext(UserContext);
  const [sendMessage] = useMutation(SEND_MESSAGE);
  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: { id },
  });
  const messages = data
    ? data.room.messages.map((item: Message) => {
        return {
          _id: item.id,
          text: item.body,
          createdAt: item.insertedAt,
          user: {
            _id: item.user.id,
            name: `${item.user.firstName} ${item.user.lastName}`,
            avatar: item.user.profilePic,
          },
        };
      })
    : null;

  const handleSendMessage = (text: string) => {
    sendMessage({
      variables: { body: text, roomId: id },
    });
  };

  return (
    <View style={styles.container}>
      {data && (
        <GiftedChat
          messages={messages.reverse()}
          onSend={(msg) => handleSendMessage(msg[0].text)}
          user={{
            _id: JSON.stringify(user.id),
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

export default Chat;
