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
        body
        insertedAt
        user {
          id
        }
      }
    }
  }
`;
