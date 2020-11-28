import React from 'react';
import {  StyleSheet,TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from "../utils/Dimentions";
/*const mentorCards= [
    {
        name: "Jojo Richard",
        avatar: "../assets/Profile Cards Avatar.png",
        title: "Master English Teacher",
        price: "450.00"
    }
]

const jobPosting= [
    {
        title:"Looking for English Tutor",
        time:"Posted 3h ago",
        description:"Hi! I’m looking for an english tutor to help me out with my research projects",
        budget: "450.00"
    }
]*/

import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Animated from 'react-native-reanimated';

function Cards({title, time, description, budget}){
return (
    <View styles={style.PostingCard}>
            <Text>{title}</Text>
            <Text>{time}</Text>
            <Text>{description}</Text>
            <Text>{budget}</Text>
    </View>
)
}

export default Cards;

const styles = StyleSheet.create({
    Postingcard: {
      backgroundColor:"#FFFFFF",
      borderWidth:1,
      borderColor:"#000000",
      marginLeft: "16",
      marginBottom: "25",
      width: "85%",
      shadowColor:"#000",
      shadowOpacity: 1,
      shadowOffset: {width: 3, height: 3}, 
      height: windowWidth/4,
    },
    
  });