import React from 'react';
import { View, useWindowDimensions, ImageBackground } from 'react-native';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import HighlightCard from './components/HighlightCard/HighlightCard';
import { highlightData } from '../../content/highlightData';
import { highlightSectionHeader } from '../../content/sectionheaderdata';
import styles from './HighlightSection.style';

const HighlightSections = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80' }}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.contentLayer}>
        <View style={styles.overlay} pointerEvents="none" />
        <SectionWrapper style={styles.sectionInner}>
     

          {/* Highlight Cards Grid */}
          <View style={styles.highlightGrid}>
            {highlightData.map((highlight) => (
              <View
                key={highlight.id}
                style={[
                  styles.highlightCardWrapper,
                  isMobile && styles.highlightCardWrapperMobile,
                ]}
              >
                <HighlightCard
                  icon={highlight.icon}
                  number={highlight.number}
                  title={highlight.title}
                />
              </View>
            ))}
          </View>
        </SectionWrapper>
      </View>
    </ImageBackground>
  );
};

export default HighlightSections;