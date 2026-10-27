import React from 'react';
import { View, Text, ImageBackground, useWindowDimensions } from 'react-native';
import { COLORS } from '../../theme/colors';
import AppButton from '../AppButton/AppButton';
import { createHeroStyles } from './Hero.styles';
import { basicdata } from '../../content/basicdata';

const Hero = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  const styles = createHeroStyles(width, height);

  return (
    <View style={styles.container}>


      <View style={styles.content}>

        <View style={styles.leftContent}>
          <Text style={styles.title}>
            {basicdata.name}
          </Text>
          <Text style={styles.subtitle}>
            {basicdata.profession}
          </Text>

          <AppButton title="Apply Now" onPress={() => navigation.navigate('Apply')} />

        </View>

        <View style={styles.rightContent}>
          
        </View>
      </View>




    </View>
  );
};

export default Hero;