import React from "react";
import { Cards } from "./../components/Cards.js";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from "./../screens/ProfileScreen.js";
import StatsScreen from "./../screens/StatsScreen.js";
import {
  Button,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import StarRating from "../components/StarRating";

const AppDrawer = createDrawerNavigator();

const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ HomeScreen} />
      <Stack.Screen name="Profile" component={ ProfileScreen} />
      <Stack.Screen name="Stats" component={StatsScreen} />
    </Stack.Navigator>
  );
}

const MyAppDrawer= () =>{
  return (
    <AppDrawer.Navigator drawerType='slide' drawerPosition='right' initialRouteName="Home">
      <AppDrawer.Screen name="Home" component={ HomeScreen} />
      <AppDrawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <AppDrawer.Screen name="StatsScreen" component={StatsScreen} />
    </AppDrawer.Navigator>
  );
}

const HomeScreen = ({navigation})=>{
    return (
      <View>
      <AppDrawer.Navigator drawerType='slide' drawerPosition='right' initialRouteName="Home">
      <AppDrawer.Screen name="Home" component={ HomeScreen} />
      <AppDrawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <AppDrawer.Screen name="StatsScreen" component={StatsScreen} />
         </AppDrawer.Navigator>
        <View style={styles.cardsWrapper}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 18,
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Mentors For You
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/profilepic1.jpg")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Mike Hawk</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>Master English Teacher</Text>
            <Text style={{ fontSize: 22, lineHeight: 22 }}>500PHP</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/profilepic2.jpg")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>EJ Sampaloc</Text>
            <StarRating ratings={3} reviews={4} />
            <Text style={styles.cardDetails}>Master Math Teacher</Text>
            <Text style={{ fontSize: 22, lineHeight: 22 }}>120PHP</Text>
          </View>
        </View>
      </View>
    );
  }

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});


