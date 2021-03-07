import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { client } from "./src/apollo";
import UserProvider from "./src/context/UserContext";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RoomScreen from "./src/screens/RoomScreen";
import { colors } from "./src/theme/index";
import { RootStackParamList } from "./src/types/index";

const Stack = createStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: colors.primaryColor,
                },
                headerTitleStyle: {
                  paddingLeft: 40,
                  fontSize: 16,
                },
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Chat rooms list",
                headerStyle: {
                  backgroundColor: colors.primaryColor,
                },
                headerTitleStyle: {
                  paddingLeft: 40,
                  fontSize: 16,
                },
              }}
            />
            <Stack.Screen
              name="Room"
              component={RoomScreen}
              options={{
                title: "Chat room",
                headerStyle: {
                  backgroundColor: colors.primaryColor,
                },
                headerTitleStyle: {
                  fontSize: 16,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </UserProvider>
  );
};

export default App;
