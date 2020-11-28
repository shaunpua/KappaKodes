import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import MessageScreen from "./MessageScreen";
import NotifScreen from "./NotifScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/*
const FeedStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="RN Social"
      component={HomeScreen}
      options={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#2e64e5",
          fontFamily: "Kufam-SemiBoldItalic",
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: "#fff",
          elevation: 0,
        },
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate("AddPost")}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#2e64e515",
          shadowColor: "#2e64e515",
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <TouchableOpacity>
              <Text
                style={{ fontWeight: "600", fontSize: 18, color: "#2e64e5" }}
              >
                Post
              </Text>
            </TouchableOpacity>
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);
*/
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
            <Icon name="chatbubbles-outline" color={"#042B67"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifcations"
        component={NotifScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarColor: "#694fad",
          tabBarIcon: () => (
            <Icon name="ios-notifications" color={"#042B67"} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationScreen;
