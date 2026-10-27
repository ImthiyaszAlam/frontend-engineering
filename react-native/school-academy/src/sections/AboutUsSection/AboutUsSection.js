import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { aboutUsSectionHeader } from '../../content/sectionheaderdata';

const AboutUsSection = () => {
  return (
    <View style={styles.container}>
      <SectionTopBar title={aboutUsSectionHeader.title} heading={aboutUsSectionHeader.heading} subTitle={aboutUsSectionHeader.subTitle} />
      
    </View>
  );
};


export default AboutUsSection;
