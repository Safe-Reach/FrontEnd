import React, { Component } from "react";
import { Button, View, Text,TouchableOpacity, StyleSheet } from "react-native";
export default function LoginScreen({navigation}) {
  return (
    <View style={styles.conatiner}>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
      <Text>Go to HomeScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
      <Text>Go to SignUp Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

});