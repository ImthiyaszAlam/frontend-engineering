import React, { useRef, useState } from 'react';
import { Modal, ScrollView, View, StyleSheet, Pressable, Text } from 'react-native';

import Navbar from './src/components/Navbar/Navbar';
import EnrollmentCard from './src/components/EnrollmentCard/EnrollmentCard';

import HomeSection from './src/sections/HomeSection/HomeSection';
import AcademicsSection from './src/sections/AcademicsSection/AcademicsSection';
import AdmissionSection from './src/sections/AdmissionSection/AdmissionSection';
import BlogSection from './src/sections/BlogSection/BlogSection';
import TeachersSection from './src/sections/TeachersSection/TeachersSection';
import PhotoGallerySection from './src/sections/PhotoGallerySection/PhotoGallerySection';
import ContactSection from './src/sections/ContactSection/ContactSection';

import AboutUsSection from './src/sections/AboutUsSection/AboutUsSection';
import MissionSection from './src/sections/MissionSection/MissionSection';
import TestimonialSection from './src/sections/TestimonialSection/TestimonialSection';
import { colors } from './src/theme';
import AboutSection from './src/sections/AboutSection/AboutSection';
import ChooseUsSection from './src/sections/ChooseUsSection/ChooseUsSection';
import HighlightSections from './src/sections/HighlightSections/HighlightSections';
import FooterSection from './src/sections/FooterSection/FooterSection';
import FoundersSection from './src/sections/FoundersSection/FoundersSection';
import ResultSection from './src/sections/ResultSection/ResultSection';
export default function App() {
  // Refs for each section
  const scrollRef = useRef(null);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    academics: useRef(null),
    admissions: useRef(null),
    blog: useRef(null),
    teachers: useRef(null),
    mission: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
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
      <Navbar onNavPress={handleNavPress} onApplyNow={() => setIsEnrollmentOpen(true)} />

      <Modal
        visible={isEnrollmentOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsEnrollmentOpen(false)}
      >
        <View style={styles.modalRoot}>
          <Pressable
            style={styles.modalBackdrop}
            onPress={() => setIsEnrollmentOpen(false)}
            accessibilityLabel="Close enrollment modal"
          />

          <View style={styles.modalContent}>
            <Pressable
              style={styles.modalCloseButton}
              onPress={() => setIsEnrollmentOpen(false)}
              accessibilityLabel="Close"
            >
              <Text style={styles.modalCloseButtonText}>×</Text>
            </Pressable>

            <EnrollmentCard onClose={() => setIsEnrollmentOpen(false)} style={styles.enrollmentCard} />
          </View>
        </View>
      </Modal>

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View ref={sectionRefs.home}>
          <HomeSection onApplyNow={() => setIsEnrollmentOpen(true)} />
        </View>
        <View ref={sectionRefs.about}><AboutSection /></View>

        <HighlightSections />
        <View ref={sectionRefs.academics}><AcademicsSection /></View>
        <View ref={sectionRefs.testimonials}><TestimonialSection /></View>
        <FoundersSection />
        <PhotoGallerySection />


        <ChooseUsSection />
        <View ref={sectionRefs.teachers}><TeachersSection /></View>
        <View ref={sectionRefs.contact}><ContactSection /></View>

        <FooterSection />
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
  modalRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  modalContent: {
    width: '92%',
    backgroundColor: 'transparent',
  },
  modalCloseButton: {
    position: 'absolute',
    top: -12,
    right: 0,
    zIndex: 2,
    backgroundColor: colors.surface,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  modalCloseButtonText: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 18,
  },
  enrollmentCard: {
    width: '100%',
  },
});