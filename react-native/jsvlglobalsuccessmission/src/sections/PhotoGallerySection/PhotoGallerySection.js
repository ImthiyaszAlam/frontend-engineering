import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import styles from './PhotoGallerySection.styles';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { photoGallerySectionHeader } from '../../content/sectionheaderdata';
import { gallery } from '../../content/gallerydd';

const PhotoGallerySection = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  // ✅ Desktop → 3 sections, Mobile → all images in one column
  const sectionPhotos = isMobile
    ? [gallery] 
    : Array.from({ length: 3 }, (_, i) =>
        gallery.slice(i * 2, i * 2 + 2)
      );

  return (
    <View style={[styles.container, isMobile && styles.containerMobile]}>
      <SectionTopBar
        title={photoGallerySectionHeader.title}
        heading={photoGallerySectionHeader.heading}
        subTitle={photoGallerySectionHeader.subTitle}
        align={photoGallerySectionHeader.align}
      />

      <View
        style={[
          styles.galleryRow,
          isMobile && styles.galleryColumn,
        ]}
      >
        {sectionPhotos.map((section, sectionIdx) => (
          <View style={styles.gallerySection} key={sectionIdx}>
            {section.length === 0 ? (
              <Text style={styles.emptyText}>No photos</Text>
            ) : (
              section.map((photo, idx) => (
                <View
                  key={idx}
                  style={
                    isMobile
                      ? styles.mobilePhoto
                      : sectionIdx === 0
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