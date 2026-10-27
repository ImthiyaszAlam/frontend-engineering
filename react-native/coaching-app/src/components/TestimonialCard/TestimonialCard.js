import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './TestimonialCard.styles';

const TestimonialCard = ({ item, style }) => {
  return (
    <View style={[styles.card, style]}>

      {/* ⭐ Rating */}
      <Text style={styles.rating}>★★★★★</Text>

      {/* Paragraph */}
      <Text style={styles.feedback}>
        {item.feedback}
      </Text>

      {/* Bottom Section */}
      <View style={styles.userSection}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.role}>{item.role}</Text>
        </View>
      </View>

    </View>
  );
};

export default TestimonialCard;