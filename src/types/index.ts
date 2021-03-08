import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Room: { id: string; name: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

export type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
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

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  profilePic: string;
};

export type LayoutProps = {
  text: string;
  children: React.ReactNode;
};

export type LoginFormProps = {
  handleLogin: (email: string, password: string) => void;
};
