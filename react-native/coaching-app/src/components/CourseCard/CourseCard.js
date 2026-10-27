import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './CourseCard.styles';
import AppButton from '../AppButton/AppButton';

const CourseCard = ({ item, style }) => {
  return (
    <View style={[styles.card, style]}>

      {/* IMAGE */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.desc}>{item.desc}</Text>

        <AppButton style={styles.enrollbtn} title="Enroll Now" onPress={() => {}} />
      </View>

    </View>
  );
};

export default CourseCard;