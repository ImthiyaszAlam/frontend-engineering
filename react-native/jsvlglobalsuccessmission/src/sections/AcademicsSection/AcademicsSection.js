import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import AcademicCard from './components/AcademicCard/AcademicCard';
import styles from './AcademicsSection.styles';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { academicsData } from '../../content/academicsData';
import { academicsSectionHeader } from '../../content/sectionheaderdata';

const AcademicsSection = () => {
  const { width } = useWindowDimensions();

  let columnCount = 4; // desktop default
  if (width < 1200) columnCount = 3; // tablet
  if (width < 768) columnCount = 1; // mobile

  return (
    <View style={styles.container}>
      <SectionTopBar 
        title={academicsSectionHeader.title} 
        heading={academicsSectionHeader.heading} 
        subTitle={academicsSectionHeader.subTitle} 
      /> 

      <View style={[styles.grid, { justifyContent: columnCount === 1 ? 'center' : 'flex-start' }]}>
        {academicsData.map((program) => (
          <View
            key={program.id}
            style={{
              flex: 1,
              minWidth: `${100 / columnCount}%`,
              paddingHorizontal: 8,
              marginBottom: 20,
            }}
          >
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