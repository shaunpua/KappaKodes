import React from "react";
import {Cards} from "./../components/Cards.js";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
} from "react-native";

const HomeScreen = () => {
  return (
    <View>
<<<<<<< Updated upstream
      <Text>Home Screen I think lel</Text>
=======
      <Text>Home Screen</Text>
      <TouchableOpacity><Cards title='Looking for English Tutor' time='Posted 3h ago' description='Hi! I’m looking for an english tutor to help me out with my research projects' budget='450.00'></Cards></TouchableOpacity>
>>>>>>> Stashed changes
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});