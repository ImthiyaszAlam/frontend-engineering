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
        <Text style={styles.heading}>Who We Are</Text>
        <Text style={styles.text}>
          We are a dedicated coaching institute committed to providing quality education
          and helping students achieve academic excellence. Our experienced faculty,
          structured learning approach, and regular assessments ensure strong concept clarity.
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