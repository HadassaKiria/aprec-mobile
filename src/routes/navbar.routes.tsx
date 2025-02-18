import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

import Home from "../pages/Home";
import ProFile from "../pages/profile";

const Tab = createBottomTabNavigator();

export default function RoutasBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#DB7E21", // Cor de fundo
          borderTopWidth: 1,
          borderTopColor: "#DB7E21", // Linha branca na borda superior
          height: 60
        },
        tabBarLabelStyle: {
          fontSize: 12,
          color: "white",
        },
        tabBarIconStyle: {
          marginBottom: 5,
          
        },
        tabBarItemStyle: {
          borderRightWidth: 1, // Separação entre os botões
          borderRightColor: "#fff",
        }
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color="white" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Doações"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color="white" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Consultas"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" color="white" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProFile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color="white" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

