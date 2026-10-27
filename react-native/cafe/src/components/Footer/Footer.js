import React from 'react';
import { View, Text } from 'react-native';
import styles from './Footer.styles';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        © 2026 Cafe. All rights reserved.
      </Text>
    </View>
  );
};

export default Footer;