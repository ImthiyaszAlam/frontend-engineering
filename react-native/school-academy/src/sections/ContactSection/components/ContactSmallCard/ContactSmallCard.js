import React from 'react';
import { View, Text } from 'react-native';
import styles from './ContactSmallCard.style';

// pass icon as component (Image / Icon)
const ContactSmallCard = ({ icon, text }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        {icon}
      </View>

      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ContactSmallCard;