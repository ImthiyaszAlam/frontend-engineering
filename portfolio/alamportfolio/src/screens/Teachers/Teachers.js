import React from 'react';
import { ScrollView, View, Text, Image, useWindowDimensions } from 'react-native';
import styles from './Teachers.styles';
import { teachers } from '../../content/teachers';
import SectionTop from '../../components/SectionTop/SectionTop';
import Footer from '../../components/Footer/Footer';

const Teachers = () => {
  const { width } = useWindowDimensions();
  const cardLayout =
    width <= 640
      ? { flexBasis: '100%' }
      : width <= 900
      ? { flexBasis: '48%' }
      : { flexBasis: '31%' };

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      <View
        style={styles.container}>

        <SectionTop
          title="Meet Our Expert Faculty"
          image="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        />

    
        <View style={styles.grid}>
          {teachers.map((item) => (
            <View key={item.id} style={[styles.card, cardLayout]}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.exp}>{item.experience}</Text>
            </View>
          ))}
        </View>
      </View>


      <Footer />
    </ScrollView>
  );
};

export default Teachers;