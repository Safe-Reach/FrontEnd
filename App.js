import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ButtonScreen from "./screens/ButtonScreen";
import ContactsScreen from "./screens/ContactsScreen";
import Login from "./screens/Login";
import SignupPage from "./screens/SignupPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "SignupPage" component={SignupPage} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
        {/* branch push working*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
