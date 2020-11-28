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
import {Picker} from '@react-native-picker/picker';

import LoginButton from "./../components/LoginButtons";
import FormInput from "../components/FormInput";
import DropDownPicker from "react-native-dropdown-picker";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Welcome.</Text>
      <Text style={styles.welcomeBelow}>
        Please fill in the details to create your account
      </Text>
      <FormInput
        //labelValue={Emails}
        placeholderText="Name"
        secureTextEntry={false}
      />
      <FormInput
        //labelValue={Password}
        placeholderText="Password"
        secureTextEntry={true}
      />
      <FormInput
        //labelValue={Password}
        placeholderText="Mobile Number"
        secureTextEntry={false}
      />
      <FormInput
        //labelValue={Password}
        placeholderText="Email"
        secureTextEntry={true}
      />
<<<<<<< HEAD
      <FormInput
        //labelValue={Password}
        placeholderText="I am a..."
        secureTextEntry={true}
      />

      <LoginButton
        buttonTitle="Sign Up As Mentor"
        onPress={() => navigation.navigate("Navigation")}
      />
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("Navigation")}
      >
        <Text style={styles.panelButtonTitle}>Signup As Learner</Text>
      </TouchableOpacity>
=======
      <Picker
      prompt='Gender'
        selectedValue={'gender'}
        style={{
          marginLeft:15,
          marginTop: 5,
          marginBottom: 10, 
          height: 50, 
          width: "100%", 
          borderColor: "#ccc",
          borderRadius: 3,
          borderWidth: 1,}}
        itemStyle={{marginLeft:50}}
        onValueChange={(itemValue) => 
           {itemValue}}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
>>>>>>> 9fced18b8cd0518535fedc02a8a5485105fc15d7
    </View>
  );
};

export default SignupScreen;

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
  welcomeTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#042B67",
    fontFamily: "Montserrat",
  },
  welcomeBelow: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Montserrat",
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
<<<<<<< HEAD
    fontFamily: "Montserrat",
=======
    fontFamily: "Arial",
>>>>>>> 9fced18b8cd0518535fedc02a8a5485105fc15d7
  },
});
