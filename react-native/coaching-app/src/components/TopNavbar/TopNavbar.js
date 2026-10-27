import React from 'react';
import { View, Text, useWindowDimensions, Pressable } from 'react-native';
import styles from './TopNavbar.styles';
import { Image } from 'react-native';
import AppButton from '../AppButton/AppButton';
import { basicdata } from '../../content/basicdata';

import { useNavigation } from '@react-navigation/native';
const TopNavbar = ({ onHamburgerPress }) => {


  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;


  const handleNavigate = (routeName) => {
    navigation.navigate(routeName);
  };


  return (
    <View style={[styles.container, isMobile && styles.containerMobile]}>

      {/* LEFT SECTION */}
      <View style={[styles.left, isMobile && styles.leftMobile]}>

        {/* Logo Image */}
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww',
          }}
          style={[styles.logoImage, isMobile && styles.logoImageMobile]}
          resizeMode="contain"
        />

        {/* Text */}
        <View>
          <Text style={[styles.logo, isMobile && styles.logoMobile]}> {basicdata.schoolName} </Text>
          <Text style={[styles.address, isMobile && styles.addressMobile]}>
            {basicdata.address}
          </Text>
        </View>

      </View>

      {/* RIGHT SECTION */}
      {isMobile ? (
        <Pressable 
          style={({ pressed, hovered }) => [
            styles.hamburger,
            pressed && styles.hamburgerPressed,
            hovered && styles.hamburgerHovered,
          ]}
          onPress={onHamburgerPress}
        >
          {({ pressed, hovered }) => (
            <Text style={[styles.hamburgerText, pressed && styles.hamburgerTextPressed, hovered && styles.hamburgerTextHovered]}>☰</Text>
          )}
        </Pressable>
      ) : (
        <View style={[styles.right, isMobile && styles.rightMobile]}>

          {/* Phones */}
          <View style={[styles.phoneContainer, isMobile && styles.phoneContainerMobile]}>
            <Text style={[styles.text, isMobile && styles.textMobile]}>📞 {basicdata.phones[0]} </Text>
            {!isMobile && <Text style={styles.text}>📞 {basicdata.phones[1]} </Text>}
          </View>

          {/* Email */}
          <Text style={[styles.text, isMobile && styles.textMobile]}>✉️ {basicdata.email}</Text>

          <AppButton title="Apply Now" onPress={() => handleNavigate('Apply')} />


        </View>
      )}

    </View>
  );
};

export default TopNavbar;