import React from 'react';
import { View } from 'react-native';
import styles from './SectionWrapper.style';

const SectionWrapper = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default SectionWrapper;