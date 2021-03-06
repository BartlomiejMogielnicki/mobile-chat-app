import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: { action?: string };
  Signup: undefined;
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

type LoginScreenRouteProp = RouteProp<RootStackParamList, "Login">;

export type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

type SignupScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Signup"
>;

type SignupScreenRouteProp = RouteProp<RootStackParamList, "Signup">;

export type SignupScreenProps = {
  navigation: SignupScreenNavigationProp;
  route: SignupScreenRouteProp;
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

export type HeaderProps = {
  text: string;
};

export type LoginFormProps = {
  handleLogin: (email: string, password: string) => void;
};

export type SignupFormProps = {
  handleSignup: (
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordConfirm: string
  ) => void;
};
