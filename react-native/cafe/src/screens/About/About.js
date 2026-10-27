import React from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import styles from './About.styles';
import { ABOUT_DATA, FEATURES } from '../../content/aboutData';
import AppCard from '../../components/AppCard/AppCard';

const About = () => {
  return (
    <View style={styles.container}>
      
      {/* Hero */}
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
        }}
        style={styles.hero}
      >
        <View style={styles.overlay}>
          <Text style={styles.heroText}>About Us</Text>
        </View>
      </ImageBackground>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{ABOUT_DATA.title}</Text>
        <Text style={styles.description}>
          {ABOUT_DATA.description}
        </Text>

        {/* Features */}
        <FlatList
          data={FEATURES}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <AppCard>
                <Text style={styles.featureTitle}>{item.title}</Text>
                <Text style={styles.featureDesc}>{item.desc}</Text>
              </AppCard>
            </View>
          )}
        />
      </View>

    </View>
  );
};

export default About;