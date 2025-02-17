import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import Home from "../pages/Home";
import ProFile from "../pages/profile";

const Tab = createBottomTabNavigator();

export default function Routas(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inìcio" component={Home}/>
            <Tab.Screen name="Doações" component={Home}/>
            <Tab.Screen name="Consultas" component={Home}/>
            <Tab.Screen name="Perfil" component={ProFile}/>
        </Tab.Navigator>
    )   

}