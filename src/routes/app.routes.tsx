import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home'
import NewsDetail from '../pages/NewsDetail';
import ConsultPage from '../pages/ConsultPage';

export type StackParamsList = {
    Home: undefined;
    NewsDetail: { feedId: number };
    ConsultPage: undefined;
}

const Stack = createNativeStackNavigator<StackParamsList>();
const Bottom = createBottomTabNavigator();


function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="NewsDetail" component={NewsDetail} options={{headerShown: false}} />
            <Stack.Screen name="ConsultPage" component={ConsultPage} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default AppRoutes;