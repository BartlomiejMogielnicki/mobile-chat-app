import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import HomeScreen from "./src/screens/HomeScreen";
import RoomScreen from "./src/screens/RoomScreen";
import { colors } from "./src/theme/index";
import { RootStackParamList } from "./src/types/index";

const Stack = createStackNavigator<RootStackParamList>();

const rooms = [
  {
    id: "d3d8fe9e-8c56-4119-a448-302dc4eb2cf3",
    name: "The one with the Chandler's recruitment task",
    roomPic:
      "https://images.unsplash.com/photo-1553532434-5ab5b6b84993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "c32b6b09-8d8c-40fc-a34d-81c25ae6139d",
    name: "The one with article for Chandler",
    roomPic: "",
  },
  {
    id: "fad642ed-0ba2-4125-aff7-a0af964ab04c",
    name: "The one with some links for Chandler",
    roomPic:
      "https://images.unsplash.com/photo-1553532434-5ab5b6b84993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={rooms}
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
  );
};

export default App;
