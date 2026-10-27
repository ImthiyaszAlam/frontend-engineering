import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styles from './Gallery.styles';
import { galleryImages } from '../../content/gallery';
import SectionTop from '../../components/SectionTop/SectionTop';
import Footer from '../../components/Footer/Footer';

const Gallery = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <SectionTop image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Gallery" />

      <View style={styles.grid}>
        {galleryImages.map((img, index) => (
          <View key={index} style={styles.card}>
            <Image source={img.src} style={styles.image} />
          </View>
        ))}
      </View>

      <Footer />
    </ScrollView>
  );
};

export default Gallery;