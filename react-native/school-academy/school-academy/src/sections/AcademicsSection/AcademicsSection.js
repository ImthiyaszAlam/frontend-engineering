import React from 'react';
import { View, Text } from 'react-native';
import styles from './AcademicsSection.styles';
import { colors, spacing, typography, layout } from '../../theme';

const AcademicsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Academics</Text>
    </View>
  );
};

export default AcademicsSection;
