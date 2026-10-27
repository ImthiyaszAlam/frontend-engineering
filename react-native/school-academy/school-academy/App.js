import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import Navbar from './src/components/Navbar/Navbar';
import { useRef } from 'react';

import HomeSection from './src/sections/HomeSection/HomeSection';
import AcademicsSection from './src/sections/AcademicsSection/AcademicsSection';
import AdmissionSection from './src/sections/AdmissionSection/AdmissionSection';
import BlogSection from './src/sections/BlogSection/BlogSection';
import TeachersSection from './src/sections/TeachersSection/TeachersSection';

import AboutUsSection from './src/sections/AboutUsSection/AboutUsSection';
import MissionSection from './src/sections/MissionSection/MissionSection';

import { colors } from './src/theme';
import AboutSection from './src/sections/AboutSection/AboutSection';
export default function App() {
  // Refs for each section
  const scrollRef = useRef(null);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    academics: useRef(null),
    admissions: useRef(null),
    blog: useRef(null),
    teachers: useRef(null),
    mission: useRef(null),
  };

  // Scroll to section handler
  const handleNavPress = (key) => {
    const ref = sectionRefs[key];
    if (ref && ref.current && scrollRef.current) {
      ref.current.measureLayout(
        scrollRef.current.getInnerViewNode(),
        (x, y) => {
          scrollRef.current.scrollTo({ y: y, animated: true });
        }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Navbar onNavPress={handleNavPress} />
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View ref={sectionRefs.home}><HomeSection /></View>
        <View ref={sectionRefs.about}><AboutSection /></View>
        <View ref={sectionRefs.academics}><AcademicsSection /></View>
        <View ref={sectionRefs.admissions}><AdmissionSection /></View>
        <View ref={sectionRefs.blog}><BlogSection /></View>
        <View ref={sectionRefs.teachers}><TeachersSection /></View>
        <View ref={sectionRefs.mission}><MissionSection /></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});