import React from 'react';
import { View, Text } from 'react-native';
import styles from './TeachersSection.styles';
import { colors, spacing, typography, layout } from '../../theme';

const TeachersSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teachers</Text>
    </View>
  );
};

export default TeachersSection;
