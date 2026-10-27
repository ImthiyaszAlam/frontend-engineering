import React from 'react';
import { View, Text } from 'react-native';
import styles from './MissionSection.styles';
import { colors, spacing, typography, layout } from '../../theme';

const MissionSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Mission</Text>
    </View>
  );
};

export default MissionSection;
