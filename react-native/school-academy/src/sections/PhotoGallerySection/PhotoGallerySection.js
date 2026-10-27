import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './PhotoGallerySection.styles';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { photoGallerySectionHeader } from '../../content/sectionheaderdata';
import { gallery } from '../../content/gallerydd';

const PhotoGallerySection = () => {

  // Divide into 3 sections (2 images each)
  const sectionPhotos = [[], [], []];

  for (let i = 0; i < 3; i++) {
    sectionPhotos[i] = gallery.slice(i * 2, i * 2 + 2);
  }

  return (
    <View style={styles.container}>
      <SectionTopBar
        title={photoGallerySectionHeader.title}
        heading={photoGallerySectionHeader.heading}
        subTitle={photoGallerySectionHeader.subTitle}
        align={photoGallerySectionHeader.align}
      />

      <View style={styles.galleryRow}>
        {[0, 1, 2].map((sectionIdx) => (
          <View style={styles.gallerySection} key={sectionIdx}>
            {sectionPhotos[sectionIdx].length === 0 ? (
              <Text style={styles.emptyText}>No photos</Text>
            ) : (
              sectionPhotos[sectionIdx].map((photo, idx) => (

                <View
                  style={
                    sectionIdx === 0
                      ? idx === 0
                        ? styles.photo40
                        : styles.photo60
                      : sectionIdx === 1
                        ? styles.photo50
                        : idx === 0
                          ? styles.photo60
                          : styles.photo40
                  }
                >
                  <Image
                    source={photo.image}
                    style={styles.image}
                  />
                </View>

              ))
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default PhotoGallerySection;