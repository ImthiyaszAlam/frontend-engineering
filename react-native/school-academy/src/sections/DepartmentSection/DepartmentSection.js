import React from 'react';
import { View } from 'react-native';
import DepartmentCard from './components/DepartmentCard/DepartmentCard';
import styles from './DepartmentSection.styles';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { departments } from '../../content/departmentData';
import { departmentSectionHeader } from '../../content/sectionheaderdata';

const DepartmentSection = () => {
  return (
    <View style={styles.container}>
      <SectionTopBar
        title={departmentSectionHeader.title}
        heading={departmentSectionHeader.heading}
        subTitle={departmentSectionHeader.subTitle}
        align={departmentSectionHeader.align}
      />
      <View style={styles.cardsRow}>
        {departments.map((dept) => (
          <DepartmentCard
            key={dept.id}
            icon={dept.icon}
            iconLib="Ionicons"
            title={dept.name}
            paragraph={dept.description}
            buttonText="Read More"
          />
        ))}
      </View>
    </View>
  );
};

export default DepartmentSection;
