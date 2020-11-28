import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import MessageScreen from "./MessageScreen";
import NotifScreen from "./NotifScreen";
import ProfileScreen from "./ProfileScreen";
import StatsScreen from "./StatsScreen";
import ContactScreen from "./ContactScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const NavigationScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#FF6347",
          tabBarIcon: () => (
            <Icon name="ios-home" color={"#042B67"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          tabBarLabel: "Messages",
          tabBarColor: "#1f65ff",
          tabBarIcon: () => (
            <Icon name="ios-chatbubbles" color={"#042B67"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotifScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarColor: "#694fad",
          tabBarIcon: () => (
            <Icon name="ios-notifications" color={"#042B67"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#694fad",
          tabBarIcon: () => (
            <Icon name="md-person" color={"#042B67"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarLabel: "Stats",
          tabBarColor: "#694fad",
          tabBarIcon: () => (
            <Icon name="ios-stats" color={"#042B67"} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationScreen;
