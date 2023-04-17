import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./app/components/Views/Intro";
import RoutesScreen from "./app/routes/index"

//Routing URL:https://reactnavigation.org/docs/tab-based-navigation

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Into">
      <Stack.Screen name="Into" component={IntroScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={RoutesScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


