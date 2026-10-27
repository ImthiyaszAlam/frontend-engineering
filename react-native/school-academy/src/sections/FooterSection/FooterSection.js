import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './FooterSection.styles';
import { colors } from '../../theme';
import { schoolName } from '../../content/basicData';

const FooterSection = () => {
  const open = async (url) => {
    try {
      await Linking.openURL(url);
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.columns}>
        <View style={styles.col}>
          <Text style={styles.heading}>{schoolName.title}</Text>
          <Text style={styles.text}>Providing quality education and a nurturing environment for students.</Text>
        </View>

        <View style={styles.col}>
          <Text style={styles.heading}>Quick Links</Text>
          <TouchableOpacity onPress={() => open('https://example.com/about')} accessibilityLabel="About link">
            <Text style={styles.link}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => open('https://example.com/admissions')} accessibilityLabel="Admissions link">
            <Text style={styles.link}>Admissions</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => open('https://example.com/contact')} accessibilityLabel="Contact link">
            <Text style={styles.link}>Contact</Text>
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
        <Text style={styles.bottomText}>© {new Date().getFullYear()} JSVL Academy. All rights reserved.</Text>
      </View>
    </View>
  );
};

export default FooterSection;
