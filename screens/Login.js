//Login.js
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useState } from "react";

export default function Login({ navigation }) {
  // images
  const LogoImage = require('../assets/logo.png');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const pressLogin = () => { //need to add code to auth login info once database is setup
    navigation.navigate('HomeScreen');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Image source={LogoImage} style={styles.logo} />
      <Text style={[styles.title]}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        style={styles.textBoxes}
        onChangeText={(text) => { setUsername(text) }}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        style={styles.textBoxes}
        onChangeText={(Text) => { setPassword(Text) }}
      />
      <TouchableOpacity onPress={pressLogin} style={[styles.buttons, { backgroundColor: '#79e0d4' }]}>
        <Text style={[styles.buttonText]}>Login</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  logo: {
    marginTop: 40,
    width: 300,
    height: 300,
    marginBottom: 10
  },
  title: {
    color: '#000000',
    alignSelf: 'flex-start',
    marginLeft: 35,
    fontSize: 20,
    marginBottom: 10
  },
  textBoxes: {
    width: 300,
    fontSize: 18,
    textAlign: 'left',
    padding: 8,
    marginBottom: 13,
    marginLeft: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttons: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#79e0d4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: 0.05,
  },
});
