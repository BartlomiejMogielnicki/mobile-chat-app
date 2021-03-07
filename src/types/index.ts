import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Room: { id: string; name: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

export type RoomListItemProps = {
  id: string;
  name: string;
  roomPic: string;
  onPress: (id: string, name: string) => void;
};

type RoomScreenRouteProp = RouteProp<RootStackParamList, "Room">;

export type RoomScreenProps = {
  route: RoomScreenRouteProp;
};

export type ChatProps = {
  id: string;
};

export type Message = {
  id: string;
  body: string;
  insertedAt: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    profilePic: string;
  };
};
