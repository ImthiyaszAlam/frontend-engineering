import React from 'react';
import { View, Text } from 'react-native';
import {  FontAwesome5 } from '@expo/vector-icons';
import styles from './SectionTitle.styles';


const SectionTitle = ({ title, align = 'center' }) => {
  const alignItems = align === 'left' ? 'flex-start' : 'center';
  const textAlign = align === 'left' ? 'left' : 'center';
  return (
    <View style={[styles.wrapper, { alignItems }] }>
      <View style={{ alignSelf: alignItems }}>
        <View style={styles.container}>
          <FontAwesome5 name="graduation-cap" size={16} style={styles.icon} />
          <Text style={[styles.text, { textAlign }]}>{title}</Text>
        </View>
        <View style={styles.underline} />
      </View>
    </View>
  );
};

export default SectionTitle;
