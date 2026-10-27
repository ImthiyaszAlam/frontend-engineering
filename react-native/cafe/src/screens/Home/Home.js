import React from 'react';
import { ScrollView, View } from 'react-native';
import Hero from '../../components/HomeSections/Hero/Hero';
import TopCategories from '../../components/HomeSections/TopCategories/TopCategories';
import FeedbackSection from '../../components/HomeSections/FeebackSection/FeedbackSection';
import styles from './Home.style';

const Home = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Hero />
      <TopCategories />
      <FeedbackSection />
    </ScrollView>
  );
};

export default Home;