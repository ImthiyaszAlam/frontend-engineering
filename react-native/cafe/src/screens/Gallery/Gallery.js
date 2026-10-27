import React from 'react';
import { View, Text, Image, FlatList, ImageBackground } from 'react-native';
import styles from './Gallery.styles';
import { GALLERY_DATA } from '../../content/galleryData';

const Gallery = () => {
  return (
    <View style={styles.container}>
      
      {/* Hero */}
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31',
        }}
        style={styles.hero}
      >
        <View style={styles.overlay}>
          <Text style={styles.heroText}>Gallery</Text>
        </View>
      </ImageBackground>

      {/* Grid */}
      <View style={styles.content}>
        <FlatList
          data={GALLERY_DATA}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}
        />
      </View>

    </View>
  );
};

export default Gallery;