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
        <Text style={styles.heading}>WHO WE ARE</Text>

        <Text style={styles.paragraph}>
          We are a dedicated institute focused on shaping students for academic
          excellence and competitive success. Our experienced faculty ensures
          strong conceptual learning and personal attention. We believe in
          discipline, consistency, and smart preparation strategies. With a
          student-first approach, we guide every learner toward their goals.
        </Text>

        <AppButton style={styles.knowmorebtn} title="Know More" onPress={() => navigation.navigate('About')} />
      </View>

    </View>
  );
};

export default WhoWeAreSection;