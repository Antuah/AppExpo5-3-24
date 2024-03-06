import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../stack/HomeStack";
import BuscarStack from "../stack/BuscarStack";
import ProfileStack from "../stack/ProfileStack";
import { Icon } from "@rneui/base";
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const { iconName, iconType } = getIconName(route.name, focused);
            return (
              <Icon name={iconName} type={iconType} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{ title: "Profile" }}
        />
        <Tab.Screen
          name="Buscar"
          component={BuscarStack}
          options={{ title: "Buscar" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const getIconName = (routeName, focused) => {
  let iconName = "";
  let iconType = "material";
  switch (routeName) {
    case "Home":
      iconName = focused ? "home" : "home";
      break;
    case "Buscar":
      iconName = focused ? "search" : "search";
      break;
    case "Profile":
      iconName = focused ? "person" : "person";
      break;
    default:
      break;
  }
  return { iconName, iconType };
};
