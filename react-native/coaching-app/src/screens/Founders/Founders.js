import React from 'react';
import { View, Text } from 'react-native';
import styles from './Founders.styles';
import Footer from '../../components/Footer/Footer';
import { ScrollView } from 'react-native';

const Founders = () => (

  <ScrollView showsVerticalScrollIndicator={false}>


    <View style={styles.container}>
      <Text style={styles.title}>Founders</Text>
      <Text style={styles.subtitle}>Learn about the people behind our mission.</Text>
    </View>
    <Footer />
  </ScrollView>
);

export default Founders;
