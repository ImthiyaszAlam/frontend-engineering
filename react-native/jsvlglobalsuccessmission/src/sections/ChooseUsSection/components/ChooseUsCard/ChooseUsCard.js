import React from 'react';
import { View, Text } from 'react-native';
import styles from './ChooseUsCard.style';

const ChooseUsCard = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default ChooseUsCard;