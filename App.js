import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ButtonScreen from "./screens/ButtonScreen";
import ContactsScreen from "./screens/ContactsScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpSceen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name = "LoginScreen" component={LoginScreen} />
        <Stack.Screen name = "SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
