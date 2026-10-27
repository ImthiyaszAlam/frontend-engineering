import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to our school! We are dedicated to providing quality education and fostering a nurturing environment for all students. Our mission is to empower learners to achieve their full potential.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default AboutUsSection;
