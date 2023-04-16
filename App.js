import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-ionicons";
import HomeScreen from "./app/components/Views/Home";

//Routing URL:https://reactnavigation.org/docs/tab-based-navigation

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

const SettingsScreen = () => (
  <View>
    <Text>Settings Screen</Text>
  </View>
);

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </SettingsStack.Navigator>
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
            // tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="home" color={color} size={size} />
            // )
          }}
        />
        <Tab.Screen
          name="Today"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: "Today",
          }}
        />
        <Tab.Screen
          name="You"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: "You",
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
