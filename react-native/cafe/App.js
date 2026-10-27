
import Navbar from './src/components/Navbar/Navbar';
import Footer from './src/components/Footer/Footer';
import Home from './src/screens/Home/Home';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Navbar />

        <AppNavigator />
      
        <Footer />
      </View>
    </NavigationContainer>

  );
}

