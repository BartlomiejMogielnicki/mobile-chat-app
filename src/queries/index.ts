import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
  {
    usersRooms {
      user {
        email
        firstName
        lastName
        id
        role
      }
      rooms {
        id
        name
        roomPic
      }
    }
  }
`;

export const GET_MESSAGES = gql`
  query($id: String) {
    room(id: $id) {
      messages {
        id
        body
        insertedAt
        user {
          id
          firstName
          lastName
          profilePic
        }
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation($body: String, $roomId: String) {
    sendMessage(body: $body, roomId: $roomId) {
      body
      id
      insertedAt
      user {
        email
        firstName
        id
        lastName
        role
        profilePic
      }
    }
  }
`;

export const MESSAGES_SUBSCRIPTION = gql`
  subscription($id: String) {
    messageAdded(roomId: $id) {
      body
      id
      insertedAt
      user {
        firstName
        id
        lastName
        profilePic
      }
    }
  }
`;
