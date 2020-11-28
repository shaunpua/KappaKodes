import React from "react";
import {Cards} from "./../components/Cards.js";
import {FontAwesome5} from "@expo/vector-icons"
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  SafeAreaView
} from "react-native";

export default class HomeScreen extends React.PureComponent{
  static navigationOptions = {
    header: null,
  }
  
  render(){
    
    return (
      <View>
        <SafeAreaView style={{flex:1}}>
          <TouchableOpacity style={{alignItems: "flex-start", margin: 16}} onPress={this.props.navigation.openDrawer}>
            <FontAwesome5 name='bars' size={24} color="#042B67" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});