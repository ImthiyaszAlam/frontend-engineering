import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './FeedbackSection.style';
import FeedbackCard from './components/FeedbackCard/FeedbackCard';
import { FEEDBACK_DATA } from '../../../content/feedbackData';

const FeedbackSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What Our Customers Say</Text>

      <FlatList
        data={FEEDBACK_DATA}
        keyExtractor={(item) => item.id}
        numColumns={4}
        scrollEnabled={false}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <FeedbackCard {...item} />
          </View>
        )}
      />
    </View>
  );
};

export default FeedbackSection;