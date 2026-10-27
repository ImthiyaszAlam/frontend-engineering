import React from 'react';
import { ScrollView, View, Text, useWindowDimensions } from 'react-native';
import styles from './Careers.styles';
import { careers } from '../../content/careers';
import SectionTop from '../../components/SectionTop/SectionTop';
import AppButton from '../../components/AppButton/AppButton';
import Footer from '../../components/Footer/Footer';

const Careers = () => {
  const { width } = useWindowDimensions();
  const numColumns = width < 600 ? 1 : width < 900 ? 1 : 2;
  const cardWidth = numColumns === 1 ? '100%' : numColumns === 2 ? '48%' : '31%';
  const justifyContent = numColumns === 1 ? 'center' : 'space-between';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Top Banner */}

      <SectionTop
        title="Join Our Team"
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
      />


      <View style={[styles.grid, { justifyContent }]}>
        {careers.map((job) => (
          <View key={job.id} style={[styles.card, { width: cardWidth }]}>
            <Text style={styles.role}>{job.role}</Text>

            <Text style={styles.meta}>
              {job.type} • {job.location}
            </Text>

            <Text style={styles.desc}>{job.desc}</Text>

            <AppButton style={styles.applybutton} title="Apply Now" onPress={() => { }} />

          </View>
        ))}
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Careers;