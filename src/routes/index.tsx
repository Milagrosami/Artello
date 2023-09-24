import { InitialRoutes } from "@/types/index";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Onboarding } from "@/screens";

const InitialStack = createStackNavigator<InitialRoutes>();
export const InitialNavigator = () => (
  <InitialStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <InitialStack.Screen name="Onboarding" component={Onboarding} />
    {/* <InitialStack.Screen name="HomeNavigator" component={HomeNavigator} /> */}
  </InitialStack.Navigator>
);

const styles = StyleSheet.create({});
