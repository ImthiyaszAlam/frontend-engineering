import React from 'react';
import { ScrollView, View, Text, Image, useWindowDimensions } from 'react-native';
import getResponsiveStyles from './OurResult.styles';
import { results } from '../../content/results';
import SectionTop from '../../components/SectionTop/SectionTop';
import Footer from '../../components/Footer/Footer';

const OurResult = () => {
  const { width } = useWindowDimensions();
  const styles = getResponsiveStyles(width);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <SectionTop
        title="Our Results"
        image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
      />

      <Text style={styles.heading}>Top Performers</Text>

      <View style={styles.grid}>
        {results.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.exam}>{item.exam}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        ))}
      </View>
      
      <Footer />
    </ScrollView>
  );
};

export default OurResult;