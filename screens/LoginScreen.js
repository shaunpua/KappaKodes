import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  Button,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimentions";

import LoginButton from "./../components/LoginButtons";
import SignUpButton from "./../components/LoginButtons";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
      <Text style={{ color: "black" }}>Don't have an account yet?</Text>
      <TouchableHighlight onPress={() => navigation.navigate("Signup")}>
        <Text style={{ color: "blue" }}>Sign up</Text>
      </TouchableHighlight>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
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
    color: "#042B67",
    fontFamily: "Roboto",
  },
  logo: {
    height: 450,
    width: "100%",
    resizeMode: "cover",
  },
});
