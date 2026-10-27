import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styles from './About.styles';
import SectionTop from '../../components/SectionTop/SectionTop';

import Footer from '../../components/Footer/Footer';


const About = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <SectionTop
        title="About Us"
        image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
      />

      {/* Intro Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Who Am I</Text>
        <Text style={styles.text}>
          Android Engineer with 2 years of experience building eSIM, eCommerce, food delivery, and rider delivery apps.
          Skilled in Kotlin, scalable Android architecture, and collaborating with senior developers on production apps.
          Focused on building smooth, high-performance mobile experiences.

        </Text>
      </View>

      {/* Image + Content */}
      <View style={styles.row}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1509062522246-3755977927d7' }}
          style={styles.image}
        />

        <View style={styles.rowContent}>
          <Text style={styles.heading}>Our Mission</Text>
          <Text style={styles.text}>
            Our mission is to empower students with knowledge, confidence, and the right
            guidance to excel in academics and competitive exams like NEET and JEE.
          </Text>
        </View>
      </View>

      {/* Vision */}
      <View style={styles.section}>
        <Text style={styles.heading}>Our Vision</Text>
        <Text style={styles.text}>
          To become a leading educational institute known for excellence, discipline,
          and student success across Bihar and beyond.
        </Text>
      </View>



      <Footer />
    </ScrollView>
  );
};

export default About;