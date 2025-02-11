import Recovery from '../pages/Recovery';
import Verify from '../pages/Verify';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import Recovery from '../pages/Recovery';
import Verify from '../pages/Verify';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen
        name="Recovery"
        component={Recovery}
        options={{ headerTitle: '', headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="Verify"
        component={Verify}
        options={{ headerTitle: '', headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;