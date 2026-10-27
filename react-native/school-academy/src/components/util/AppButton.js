import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './AppButton.styles';

const Button = ({ onPress, title, style, textStyle, ...props }) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={onPress}
    activeOpacity={0.8}
    {...props}
  >
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
