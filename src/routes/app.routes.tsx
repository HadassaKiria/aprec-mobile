import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home'

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default AppRoutes;