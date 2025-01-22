import { View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#C7731E" barStyle="light-content" transLucent={false} />
      <Routes/>
    </NavigationContainer>
  );
}
