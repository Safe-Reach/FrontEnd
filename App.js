import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ButtonScreen from "./screens/ButtonScreen";
import ContactsScreen from "./screens/ContactsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
        {/* Jose is a [redacted] for this */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
