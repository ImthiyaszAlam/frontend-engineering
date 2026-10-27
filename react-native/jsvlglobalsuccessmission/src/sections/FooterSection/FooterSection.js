import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './FooterSection.styles';
import { schoolName } from '../../content/basicData';

const FooterSection = ({ onNavPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.columns}>

        <View style={styles.col}>
          <Text style={styles.heading}>{schoolName.title}</Text>
          <Text style={styles.text}>
            Providing quality education and a nurturing environment for students.
          </Text>
        </View>

        <View style={styles.col}>
          <Text style={styles.heading}>Quick Links</Text>

          <TouchableOpacity onPress={() => onNavPress('about')}>
            <Text style={styles.link}>About</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNavPress('academics')}>
            <Text style={styles.link}>Courses</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNavPress('testimonials')}>
            <Text style={styles.link}>Testimonials</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNavPress('gallery')}>
            <Text style={styles.link}>Gallery</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => onNavPress('founders')}>
            <Text style={styles.link}>Founders</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.col}>
          <Text style={styles.heading}>Contact</Text>
          <Text style={styles.text}>{schoolName.schoolAddress}</Text>
          <Text style={styles.text}>{schoolName.mobileNumber}</Text>
          <Text style={styles.text}>{schoolName.emailAddress}</Text>
        </View>

      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>
          © {new Date().getFullYear()} JSVL Academy. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

export default FooterSection;