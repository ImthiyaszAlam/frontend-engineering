import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './ResultCard.styles';

const ResultCard = ({ photoUri, name, stream, percentage, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress} accessibilityRole="button">
      <Image source={{ uri: photoUri }} style={styles.image} accessibilityLabel={`${name} photo`} />

      <View style={styles.bottomSection}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.stream} numberOfLines={1}>{stream}</Text>
        <Text style={styles.percentage}>{percentage}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResultCard;
