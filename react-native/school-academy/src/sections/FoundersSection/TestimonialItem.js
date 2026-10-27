import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './terstimonialItem.style';

const TestimonialItem = ({ item, width }) => {
  return (
    <View style={[styles.slide, { width }]}>
      <View style={styles.contentWrapper}>
        <View style={styles.left}>
          <Text style={styles.quote} numberOfLines={20}>
            “{item.quote}”
          </Text>
        </View>

        <View style={styles.right}>
          <Image  source={item.image} style={styles.avatar} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.role}>{item.role}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(TestimonialItem);
