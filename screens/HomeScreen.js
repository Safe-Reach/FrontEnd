import React from "react";
import { Button, View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; //person symbol

export default function HomeScreen({ navigation }) {
  // Getting the height and width of any screen
  const { width, height } = Dimensions.get("window");
  const containerWidth = width;
  const containerHeight = height/2;

  return (
    <View style={styles.container}>
      {/* Go to Button */}
      <TouchableOpacity style={[styles.button1, { width: containerWidth, height: containerHeight }]} onPress={() => navigation.navigate("ButtonScreen")}>
        <MaterialCommunityIcons name="cellphone-message" size={150} color="black" />
        <Text style={styles.button1size}>Go to Button</Text>
      </TouchableOpacity>

      {/* horizontal line */}
      <View style={[styles.horizontalLine, {width:containerWidth}]} />

      {/* Go to Contacts */}
      <TouchableOpacity style={[styles.button2, { width: containerWidth, height: containerHeight }]} onPress={() => navigation.navigate("ContactsScreen")}>
        <FontAwesome name="user-circle" size={150} color="black" />
        <Text style={styles.button2size}>Go to Contacts</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  horizontalLine: {
    borderBottomWidth:10,
    borderBottomColor:"black",
  },
  button1size:{
    fontSize: 20,
  },
  button2size: {
    fontSize: 20,
  },
});
