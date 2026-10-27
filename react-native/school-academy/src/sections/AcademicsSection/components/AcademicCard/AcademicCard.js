import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './AcademicCard.styles';
// You can replace these with your icon components or libraries
const DummyIcon = ({ style }) => <View style={[{ width: 16, height: 16, backgroundColor: '#ccc', borderRadius: 8 }, style]} />;

const AcademicCard = ({
  image,
  totalClasses,
  rating,
  title,
  description,
  totalSeats,
  period,
  fees,
}) => {
  return (
    <View style={styles.card}>
      {image && (
        <Image source={image} style={styles.image} />
      )}
      <View style={styles.row}>
        <View style={styles.left}>
          <DummyIcon style={styles.icon} />
          <Text>{totalClasses} Classes</Text>
        </View>
        <View style={styles.right}>
          <DummyIcon style={styles.icon} />
          <Text style={styles.rating}>{rating} ★</Text>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={2}>{description}</Text>
      <View style={styles.bottomSection}>
        <View style={[styles.bottomItem, styles.bottomItemLeft]}>
          <DummyIcon style={styles.icon} />
          <Text style={styles.bottomText}>{totalSeats} Seats</Text>
        </View>
        <View style={[styles.bottomItem, styles.bottomItemCenter]}>
          <DummyIcon style={styles.icon} />
          <Text style={styles.bottomText}>{period}</Text>
        </View>
        <View style={[styles.bottomItem, styles.bottomItemRight]}>
          <DummyIcon style={styles.icon} />
          <Text style={styles.bottomText}>{fees}</Text>
        </View>
      </View>
    </View>
  );
};

export default AcademicCard;
