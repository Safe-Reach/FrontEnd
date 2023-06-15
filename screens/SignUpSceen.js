// SignupPage.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function SignupPage({ navigation }) {

  const pressSignup = () => { //need to add code for validate user input for all fields
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundBox} />
      <View style={styles.contentBox}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          placeholder="First Name"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Last Name"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Email Name"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Phone Number"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Birth date"
          style={styles.textInput}
        />
        <TouchableOpacity onPress={pressSignup} style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundBox: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#c6f5eb',
  },
  contentBox: {
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  signupButton: {
    backgroundColor: '#79e0d4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
