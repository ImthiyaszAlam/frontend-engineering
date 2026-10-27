import React from 'react';
import { View, Text } from 'react-native';
import styles from './BlogSection.styles';
import { colors, spacing, typography, layout } from '../../theme';

const BlogSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blog</Text>
    </View>
  );
};

export default BlogSection;
