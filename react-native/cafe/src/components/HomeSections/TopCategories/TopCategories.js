import React from 'react';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import CategoryCard from './components/CategoryCard/CategoryCard';
import styles from './TopCategories.style';
import { TOP_CATEGORIES_DATA } from '../../../content/topCategoriesData';

const TopCategories = () => {
  const { width } = useWindowDimensions();

  const cardWidth = (width - 64) / 4; // 4 cards per row

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Categories</Text>
      <Text style={styles.subHeading}>Top Categories</Text>

      <FlatList
        data={TOP_CATEGORIES_DATA}
        keyExtractor={(item) => item.id}
        numColumns={4}
        scrollEnabled={false}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (

          <View style={styles.item}>
            <CategoryCard
              title={item.title}
              image={item.image}
              style={{ width: cardWidth }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default TopCategories;