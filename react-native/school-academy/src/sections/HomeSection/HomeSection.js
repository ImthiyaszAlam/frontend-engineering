import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, Animated } from 'react-native';
import styles from './HomeSection.styles';
import AdmissionCard from '../../components/AdmissionCard/AdmissionCard';

const HomeSection = ({ onApplyNow }) => {

  const text = "JSVL GLOBAL SUCCESS MISSION";
  const letters = text.split('');

  const animations = useRef(letters.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const anims = animations.map((anim, index) =>
      Animated.timing(anim, {
        toValue: 1,
        duration: 300,
        delay: index * 50, // 🔥 fast stagger for letters
        useNativeDriver: true,
      })
    );

    Animated.stagger(30, anims).start();
  }, []);

  return (
    <ImageBackground
      source={{ uri: "https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?q=80&w=1471&auto=format&fit=crop" }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.centerContent}>

          {/* 🔥 Letter Animation */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {letters.map((char, index) => {
              const translateY = animations[index].interpolate({
                inputRange: [0, 1],
                outputRange: [30, 0],
              });

              const scale = animations[index].interpolate({
                inputRange: [0, 1],
                outputRange: [0.8, 1],
              });

              return (
                <Animated.Text
                  key={index}
                  style={[
                    styles.schoolName,
                    {
                      opacity: animations[index],
                      transform: [{ translateY }, { scale }],
                    },
                  ]}
                >
                  {char === ' ' ? ' ' : char}
                </Animated.Text>
              );
            })}
          </View>

          <AdmissionCard onApply={onApplyNow} />

        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeSection;