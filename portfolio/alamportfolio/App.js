
import TopNavbar from './src/components/TopNavbar/TopNavbar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <TopNavbar />
        <AppNavigator />
      </View>
    </NavigationContainer>

  );
}

