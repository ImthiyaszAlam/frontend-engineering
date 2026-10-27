import React from 'react';
import { View, Text, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS } from '../../theme/colors';
import AppButton from '../AppButton/AppButton';

const Hero = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      height: height * 0.4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.5)', // dark overlay for readability
    },
    content: {
      alignItems: 'center',
      paddingHorizontal: width > 600 ? 40 : 20,
    },
    welcome: {
      color: COLORS.secondary,
      fontSize: width > 600 ? 18 : 16,
      marginBottom: 8,
    },
    title: {
      color: COLORS.secondary,
      fontSize: width > 600 ? 32 : 28,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      color: COLORS.secondary,
      fontSize: width > 600 ? 16 : 14,
      lineHeight: width > 600 ? 24 : 20,
      marginBottom: 20,
      textAlign: 'center',
    },
  });

  return (
    <ImageBackground
      source={{
        uri: 'https://plus.unsplash.com/premium_photo-1665203507321-5451d8efd4bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.title}>
          SCHOOL NAME
        </Text>
        <Text style={styles.subtitle}>
          Empowering students with quality education and expert guidance{"\n"}
          to achieve success in academics and competitive exams.{"\n"}
          Secure your child's future with us!
        </Text>
        <AppButton title="Apply Now" onPress={() => navigation.navigate('Apply')} />
      </View>
    </ImageBackground>
  );
};

export default Hero;