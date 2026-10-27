import { useEffect, useRef } from 'react';
import { View, ImageBackground, Animated, useWindowDimensions } from 'react-native';
import styles from './HomeSection.styles';
import AdmissionCard from '../../components/AdmissionCard/AdmissionCard';
import { imagesData } from '../../content/images';

const HomeSection = ({ onApplyNow }) => {
  const { width } = useWindowDimensions();
  const isSmallDevice = width < 375; // hide text on small screens

  const text = "JSVL GLOBAL SUCCESS MISSION";
  const letters = text.split('');
  const animations = useRef(letters.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    if (isSmallDevice) return; // skip animations on small screens

    const anims = animations.map((anim, index) =>
      Animated.timing(anim, {
        toValue: 1,
        duration: 300,
        delay: index * 50,
        useNativeDriver: true,
      })
    );

    Animated.stagger(30, anims).start();
  }, [isSmallDevice]);

  return (
    <ImageBackground
      source={imagesData.logo}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.centerContent}>
          
          {/* 🔥 Animated text only if not small device */}
          {!isSmallDevice && (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              {letters.map((char, index) => {
                const translateY = animations[index].interpolate({ inputRange: [0, 1], outputRange: [30, 0] });
                const scale = animations[index].interpolate({ inputRange: [0, 1], outputRange: [0.8, 1] });

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
                    {char}
                  </Animated.Text>
                );
              })}
            </View>
          )}

          <AdmissionCard onApply={onApplyNow} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeSection;