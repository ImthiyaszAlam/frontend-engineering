import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import Menu from '../screens/Menu/Menu';
import Gallery from '../screens/Gallery/Gallery';
import Contact from '../screens/Contact/Contact';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export default AppNavigator;