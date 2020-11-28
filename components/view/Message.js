import React from "react";
import {View, StyleSheet, Image, Text,TouchableHighlight,PixelRatio} from "react-native"

const Message = props => {
    console.log(JSON.stringify(props));
    return (
      <View style ={styles.message}>
          <Image style={styles.image} source={{uri:'https://yt3.ggpht.com/ytc/AAUvwng2_yj4qwaRuydTk7m6Bhdl7_moj_LZZRI9ekPvLA=s900-c-k-c0x00ffffff-no-rj'}}/>
          <Text style={styles.name}>{props.fromUser}{"\n"} 
            <Text style={styles.text}>{props.message}
            </Text>  
          </Text> 
          <Text style={styles.date}>{props.dateTime}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    message:{
      width:"100%",
      borderWidth:StyleSheet.hairlineWidth,
      borderColor: "black",
      flexDirection:'row',
      margin:0,
      padding:10
    },
    name:{
      fontSize: 20,
    },
    text:{
      fontSize:13,
    },
    date:{
      fontSize: 12,
      textAlign:'right',
      position:'absolute',
      left:275,
      top:"50%"
    },
    image:{
      height:40,
      width:40,
      flexWrap:'wrap'
    }
  })
  export default Message;