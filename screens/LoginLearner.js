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

const LoginLearner = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
        buttonTitle="Log In As Learner"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default LoginLearner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    padding:20,
  },
  welcomeTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#042B67",
    fontFamily: "Montserrat",
  },
});
