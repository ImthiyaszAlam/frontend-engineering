import React from 'react';
import { View, Text, Image } from 'react-native';
import AppCard from '../../../../AppCard/AppCard';
import styles from './FeedbackCard.style';

const FeedbackCard = ({ name, profession, image, feedback }) => {
  return (
    <AppCard style={styles.card}>
      
      {/* Top Section */}
      <View style={styles.topRow}>
        <View style={styles.leftSection}>
          <Image source={{ uri: image }} style={styles.image} />

          <View style={styles.userInfo}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.profession}>{profession}</Text>
          </View>
        </View>

        <Text style={styles.rating}>⭐⭐⭐⭐⭐</Text>
      </View>

      {/* Bottom Section */}
      <Text style={styles.feedback} numberOfLines={5}>
        {feedback}
      </Text>

    </AppCard>
  );
};

export default FeedbackCard;