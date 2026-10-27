import React from 'react';
import { View } from 'react-native';
import styles from './SectionWrapper.style';

const SectionWrapper = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default SectionWrapper;