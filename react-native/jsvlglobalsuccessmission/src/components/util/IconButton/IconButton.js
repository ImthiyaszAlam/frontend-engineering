import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './IconButton.styles';

const IconButton = ({ icon, text, onPress }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
    activeOpacity={0.8}
    accessibilityRole="button"
    accessibilityLabel={text}
  >
    <FontAwesome
      name={icon}
      size={20}
      color={styles.icon.color}
      style={styles.icon}
    />
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default IconButton;
