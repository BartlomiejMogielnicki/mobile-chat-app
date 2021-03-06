import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: { id: string; name: string; roomPic: string }[];
  Room: { id: string; name: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export type RoomListItemProps = {
  id: string;
  name: string;
  roomPic: string;
  onPress: (id: string, name: string) => void;
};

type RoomScreenNavigationProp = StackNavigationProp<RootStackParamList, "Room">;

type RoomScreenRouteProp = RouteProp<RootStackParamList, "Room">;

export type RoomScreenProps = {
  navigation: RoomScreenNavigationProp;
  route: RoomScreenRouteProp;
};
