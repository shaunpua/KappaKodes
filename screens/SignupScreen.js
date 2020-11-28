import React, { Component } from "react";
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

class PickerComponent extends Component {    
    state = {  
         Gender: 'I am..' 
      }
    render(){
      return(
        <View>
          <Picker
            selectedValue={this.state.Gender}
            style={{height: 50, 
              width:330,
              alignSelf:"center",
              marginLeft:20,
              borderColor: "#ccc",
              borderRadius: 3,
              borderWidth: 1,
              flexDirection:"row"}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({Gender: itemValue})
            }>
            <Picker.Item value='' label='Gender' />  
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female"/>
          </Picker>
        </View>
      )
    }
}
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
      <PickerComponent></PickerComponent>
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
    fontFamily: "Roboto",
  },
  welcomeTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#042B67",
    fontFamily: "Roboto",
  },
  welcomeBelow: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Roboto",
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
    fontFamily: "Roboto",
  },
});
