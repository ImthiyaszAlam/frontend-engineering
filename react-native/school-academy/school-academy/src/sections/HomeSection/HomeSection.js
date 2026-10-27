import React from 'react';
import { View, Text } from 'react-native';
import styles from './HomeSection.styles';
import { colors, spacing, typography, layout } from '../../theme';

const HomeSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to School Academy</Text>
    </View>
  );
};

export default HomeSection;
