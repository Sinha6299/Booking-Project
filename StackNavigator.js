import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreens";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SavedScreen from "./screens/SavedScreens";
import BookingScreen from "./screens/BookingScreens";
import ProfileScreen from "./screens/ProfileScreens";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreens from "./screens/SearchScreens";
import PlaceScreens from "./screens/PlaceScreens";
import MapScreens from "./screens/MapScreens";
import PropertyInfoScreens from "./screens/PropertyInfoScreens";
import RoomsScreens from "./screens/RoomsScreens";
import UserScreens from "./screens/UserScreens";
import ConfirmationScreens from "./screens/ConfirmationScreens";
import LoginScreens from "./screens/LoginScreens";
import RegisterScreens from "./screens/RegisterScreens";
const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="blue" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="blue" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLabel: "Bookings",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications" size={24} color="blue" />
              ) : (
                <Ionicons name="notifications-outline" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="blue" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreens} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreens} options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
        <Stack.Screen name="Search" component={SearchScreens} options={{headerShown:false}}/>
        <Stack.Screen name="Places" component={PlaceScreens} />
        <Stack.Screen name="Map" component={MapScreens} options={{headerShown:false}}/>
        <Stack.Screen name="Info" component={PropertyInfoScreens} />
        <Stack.Screen name="Rooms" component={RoomsScreens} />
        <Stack.Screen name="User" component={UserScreens} />
        <Stack.Screen name="Confirm" component={ConfirmationScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
