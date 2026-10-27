import React from 'react';
import { View, Text, Image } from 'react-native';
import AppCard from '../AppCard/AppCard';
import styles from './MenuCard.styles';

const MenuCard = ({ title, price, image }) => {
  return (
    <AppCard style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </AppCard>
  );
};

export default MenuCard;