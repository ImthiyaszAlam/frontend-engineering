import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Hero.style';
import AppButton from '../../AppButton/AppButton';  
import { useNavigation } from '@react-navigation/native';

const Hero = () => {
   const navigation = useNavigation()


  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
      }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Premium Coffee Experience</Text>

        <Text style={styles.subtitle}>
          Freshly brewed coffee, cozy ambience, and unforgettable taste.
        </Text>

        <AppButton style={styles.button} title="Explore Menu"  onPress={() => navigation.navigate('Menu')}/>
      </View>
    </ImageBackground>
  );
};

export default Hero;