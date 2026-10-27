import React from 'react';
import { View, useWindowDimensions, ImageBackground } from 'react-native';
import HighlightCard from '..//HighlightCard/HighlightCard';
import { highlightData } from '../../content/highlightData';
import styles from './HighlightSection.styles';

const HighlightSections = () => {
  const { width } = useWindowDimensions();
  const cardWidth = width >= 1280 ? '24%' : width >= 1024 ? '32%' : width >= 768 ? '48%' : '100%';

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80' }}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.contentLayer}>
        <View style={styles.overlay} pointerEvents="none" />

        <View style={styles.highlightGrid}>
          {highlightData.map((highlight) => (
            <View key={highlight.id} style={[styles.highlightCardWrapper, { width: cardWidth }]}> 
              <HighlightCard
                icon={highlight.icon}
                number={highlight.number}
                title={highlight.title}
              />
            </View>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

export default HighlightSections;