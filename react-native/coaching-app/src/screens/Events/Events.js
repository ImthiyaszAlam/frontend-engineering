import React from 'react';
import { View, Text } from 'react-native';
import styles from './Events.styles';
import Footer from '../../components/Footer/Footer';

const Events = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Events</Text>
    <Text style={styles.subtitle}>Explore our upcoming events and workshops.</Text>
  </View>
);

export default Events;
