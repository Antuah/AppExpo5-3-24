import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../modules/profile/adapters/screens/Profile";
import Imagen from "../../modules/profile/adapters/components/Imagen";
const Stack = createStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="Imagen"
        component={Imagen}
        options={{ title: "Imagen" }}
      />
    </Stack.Navigator>
  );
}
