//Login.js
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";

export default function Login({ navigation }) {
  const LogoImage = require('../assets/logo.png');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const pressLogin = () => {
    // Add code to authenticate login info once the database is set up
    navigation.navigate('HomeScreen');
  };

  const pressSignup = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={LogoImage} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity onPress={pressLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressSignup} style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Signup</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 40,
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  title: {
    color: '#000000',
    alignSelf: 'flex-start',
    marginLeft: 35,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textBoxes: {
    width: '80%',
    fontSize: 18,
    textAlign: 'left',
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  loginButton: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#79e0d4',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  signupButton: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 14,
    borderRadius: 10,
  },
  signupButtonText: {
    color: '#b0a9a9',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
