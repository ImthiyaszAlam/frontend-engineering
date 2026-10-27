import React from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import styles from './Home.styles';
import Hero from '../../components/Hero/Hero';
import WhoWeAreSection from '../../components/WhoWeAreSection/WhoWeAreSection';
import { ScrollView } from 'react-native';
import Footer from '../../components/Footer/Footer';
import HighlightSections from '../../components/HighlightSection/HighlightSection'; 
import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';

const Home = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

      <Hero navigation={navigation} />
      <WhoWeAreSection navigation={navigation} />
      <HighlightSections />
      <FeedbackSection />
      <Footer />
    </ScrollView>
  );
};

export default Home;