import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  Button,
  StyleSheet,
} from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimentions";

import LoginButton from "./../components/LoginButtons";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={StyleSheet.container}>
      <Image
        source={require("../assets/kidwritting.png")}
        style={styles.logo}
      />
      <LoginButton
        buttonTitle="Log In As Mentor"
        onPress={() => navigation.navigate("LoginMen")}
      />
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("LoginLearn")}
      >
        <Text style={styles.panelButtonTitle}>Log In As Learner</Text>
      </TouchableOpacity>
      <Text style={{ color: "black" }}>
        Don't have an account yet?
        <Text style={{ color: "blue" }}> Sign Up</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  commandButton: {
    marginTop: 10,
    width: "75%",
    borderRadius: 20,
    height: windowHeight / 15,
    backgroundColor: "#ffffff",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#042B67",
  },
  panelButtonTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#042B67",
    fontFamily: "Lato-Regular",
  },
  logo: {
    height: 450,
    width: "100%",
    resizeMode: "cover",
  },
});
