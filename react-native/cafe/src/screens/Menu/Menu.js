import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './Menu.styles';
import { MENU_DATA } from '../../content/menuData';
import MenuCard from '../../components/MenuCard/MenuCard';

const Menu = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Our Menu</Text>

      <FlatList
        data={MENU_DATA}
        keyExtractor={(item) => item.id}
        numColumns={4}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <MenuCard {...item} />
          </View>
        )}
      />

    </View>
  );
};

export default Menu;