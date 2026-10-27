import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Navbar.style';
import AppButton from '../AppButton/AppButton';
import { useNavigation } from '@react-navigation/native';

const NAV_ITEMS = ['Home', 'Menu', 'About', 'Gallery', 'Contact'];

const Navbar = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>

      <Text style={styles.logo}>☕ Cafe</Text>

      <View style={styles.navLinks}>
        {NAV_ITEMS.map((item) => (

          <TouchableOpacity
            key={item}
            style={styles.link}
            onPress={() => navigation.navigate(item)}
          >
            <Text style={styles.linkText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <AppButton title="Book a Table" />
    </View>
  );
};

export default Navbar;