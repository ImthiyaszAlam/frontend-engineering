import React from 'react';
import { View, Text } from 'react-native';
import styles from './HighlightCard.styles';

const HighlightCard = ({ icon, number, title }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.iconContainer}>{icon}</Text>
      <Text style={styles.numberText}>{number}</Text>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default HighlightCard;
