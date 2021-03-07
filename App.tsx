import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { API_TOKEN } from "@env";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import HomeScreen from "./src/screens/HomeScreen";
import RoomScreen from "./src/screens/RoomScreen";
import { colors } from "./src/theme/index";
import { RootStackParamList } from "./src/types/index";
import { URL } from "./src/urls/index";

const httpLink = createHttpLink({
  uri: URL,
});

const authLink = setContext((_, { headers }) => {
  const token = API_TOKEN;

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
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
  );
};

export default App;
