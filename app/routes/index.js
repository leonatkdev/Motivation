import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/Views/Home";
import InfoScreen from "../components/Views/InfoScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <TodayStack.Screen name="Details" component={InfoScreen} />
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
    <>
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
    </>
  );
}
