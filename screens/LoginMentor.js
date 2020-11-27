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
import FormInput from "../components/FormInput";

const LoginMentor = ({ navigation }) => {
  return (
    <View style={StyleSheet.container}>
      <Text style={styles.welcomeTitle}>Welcome.</Text>
      <FormInput
        //labelValue={Emails}
        placeholderText="Email"
        secureTextEntry={false}
      />
      <FormInput
        //labelValue={Password}
        placeholderText="Password"
        secureTextEntry={true}
      />

      <LoginButton
        buttonTitle="Log In As Mentor"
        onPress={() => navigation.navigate("Home")}
      />
      <Text style={{ color: "blue" }}>
        I am blue
        <Text style={{ color: "red" }}>i am red</Text>
        and i am blue again
      </Text>
    </View>
  );
};

export default LoginMentor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  welcomeTitle: {
    fontSize: 40,
    color: "#042B67",
    fontFamily: "Montserrat",
  },
});
