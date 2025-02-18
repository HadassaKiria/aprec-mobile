import React from "react"
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'

import { AuthProvider } from "./src/contexts/AuthContext"

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#C7731E" barStyle="light-content" transLucent={false} />
        <Routes/>
      </AuthProvider>

    </NavigationContainer>
  );
}
