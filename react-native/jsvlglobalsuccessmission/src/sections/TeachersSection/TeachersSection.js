
import React from 'react';
import { View, Text } from 'react-native';
import TeacherCard from './components/TeacherCard/TeacherCard';
import styles from './TeachersSection.styles';
import { colors, spacing, typography, layout } from '../../theme';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { teachers, teachersSectionHeader } from '../../content/teachersData';

const TeachersSection = () => {
  // ...existing code...

  return (
    <View style={styles.container}>
      <SectionTopBar
        title={teachersSectionHeader.title}
        heading={teachersSectionHeader.heading}
        subTitle={teachersSectionHeader.subTitle}
        align={teachersSectionHeader.align}
      />
      <View style={styles.row}>
        {teachers.map((teacher, idx) => (
          <View style={styles.cardWrapper} key={idx}>
            <TeacherCard
              {...teacher}
              designation={teacher.designation || teacher.subject}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default TeachersSection;
