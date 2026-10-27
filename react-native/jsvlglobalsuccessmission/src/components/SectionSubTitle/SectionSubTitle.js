import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './SectionSubTitle.styles';

const SectionSubTitle = ({ subtitle, align = 'center', style }) => {
  return (
    <View style={[styles.container, align === 'left' && { justifyContent: 'flex-start' }] }>
      <Text
        style={[
          styles.text,
          align === 'left' && { textAlign: 'left', alignSelf: 'flex-start' },
          style,
        ]}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default SectionSubTitle;
