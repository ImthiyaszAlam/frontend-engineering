import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import styles from './WhoWeAreSection.styles';
import AppButton from '../AppButton/AppButton';

const WhoWeAreSection = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const isWideScreen = width >= 768;

  return (
    <View
      style={[
        styles.container,
        isWideScreen ? styles.containerRow : styles.containerColumn,
      ]}
    >

      {/* LEFT IMAGE */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644'
        }}
        style={[styles.image, isWideScreen ? styles.imageWide : styles.imageNarrow]}
        resizeMode="cover"
      />

      {/* RIGHT CONTENT */}
      <View style={[styles.content, isWideScreen ? styles.contentWide : styles.contentNarrow]}>
        <Text style={styles.heading}>WHO I AM</Text>

        <Text style={styles.paragraph}>
            Android Engineer with 2 years of experience building eSIM, eCommerce, food delivery, and rider delivery apps.
          Skilled in Kotlin, scalable Android architecture, and collaborating with senior developers on production apps.
          Focused on building smooth, high-performance mobile experiences.

        </Text>

        <AppButton style={styles.knowmorebtn} title="Know More" onPress={() => navigation.navigate('About')} />
      </View>

    </View>
  );
};

export default WhoWeAreSection;