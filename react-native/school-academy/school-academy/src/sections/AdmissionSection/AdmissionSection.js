import React from 'react';
import { View, Text } from 'react-native';
import styles from './AdmissionSection.styles';
import { colors, spacing, typography, layout } from '../../theme';

const AdmissionSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admission</Text>
    </View>
  );
};

export default AdmissionSection;
