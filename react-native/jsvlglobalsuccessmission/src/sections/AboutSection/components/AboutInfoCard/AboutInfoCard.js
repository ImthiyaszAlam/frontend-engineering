import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './AboutInfoCard.styles';

const AboutInfoCard = ({ icon, title, subtitle }) => (
  <View style={styles.aboutInfoCard}>
    
    <View style={styles.aboutInfoCardLeft}>
      <FontAwesome5
        name={icon}          
        size={28}
        color="#4A90E2"      
      />
    </View>

    <View style={styles.aboutInfoCardRight}>
      <Text style={styles.aboutInfoCardTitle}>{title}</Text>
      <Text style={styles.aboutInfoCardSubtitle }  numberOfLines={2}>{subtitle}</Text>
    </View>

  </View>
);

export default AboutInfoCard;