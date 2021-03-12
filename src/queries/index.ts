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
        profilePic
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
        role
        email
      }
    }
  }
`;

export const LOG_IN = gql`
  mutation($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      token
      user {
        email
        firstName
        id
        profilePic
        role
        lastName
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation(
    $email: String
    $firstName: String
    $lastName: String
    $password: String
    $passwordConfirm: String
  ) {
    registerUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
      passwordConfirm: $passwordConfirm
    ) {
      id
      email
      firstName
      lastName
      role
      profilePic
    }
  }
`;
