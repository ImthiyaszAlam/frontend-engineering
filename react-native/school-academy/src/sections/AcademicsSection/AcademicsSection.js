import React from 'react';

import AcademicCard from './components/AcademicCard/AcademicCard';
import { View, Text } from 'react-native-web';
import styles from './AcademicsSection.styles';
import { spacing, layout } from '../../theme';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { academicsData } from '../../content/academicsData';
import { academicsSectionHeader } from '../../content/sectionheaderdata';

const AcademicsSection = () => {
  return (
    <View style={styles.container}> 
    <SectionTopBar 
      title={academicsSectionHeader.title} 
      heading={academicsSectionHeader.heading} 
      subTitle={academicsSectionHeader.subTitle} 
    /> 

    {/* Grid layout for academic cards - 3 columns */}
    <View style={{ flexDirection: 'row', width: '100%', flexWrap: 'wrap', marginTop: 20 }}>
      {academicsData.map((program) => (
        <View key={program.id} style={{ flex: 1, minWidth: '25%', paddingHorizontal: 4, marginBottom: 20 }}>
          <AcademicCard
            image={program.image}
            totalClasses={program.totalClasses}
            rating={program.rating}
            title={program.title}
            description={program.description}
            totalSeats={program.totalSeats}
            period={program.period}
            fees={program.fees}
          />
        </View>
      ))}
    </View>
    </View>
  );
};

export default AcademicsSection;
