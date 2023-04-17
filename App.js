import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./app/components/Views/Home";
import InfoScreen from "./app/components/Views/InfoScreen";
import Intro from "./app/components/Views/Intro";

//Routing URL:https://reactnavigation.org/docs/tab-based-navigation

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Intro" component={Intro} />
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const TodayStack = createNativeStackNavigator();

function TodayStackScreen() {
  return (
    <TodayStack.Navigator screenOptions={{ headerShown: false }}>
      <TodayStack.Screen name="Settings" component={InfoScreen} />
    </TodayStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#606267",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
            backgroundColor: "#262C33",
            borderTopColor: "#262C33",
          },
          tabBarIconStyle: { display: "none" },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="Today"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Today",
          }}
        />
        <Tab.Screen
          name="You"
          component={TodayStackScreen}
          options={{
            tabBarLabel: "You",
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


