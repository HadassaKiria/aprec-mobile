import { View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import RoutasBar from './src/routes/navbar.routes';
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#C7731E" barStyle="light-content" translucent={true} />
      <RoutasBar/>
    </NavigationContainer>
  );
}
