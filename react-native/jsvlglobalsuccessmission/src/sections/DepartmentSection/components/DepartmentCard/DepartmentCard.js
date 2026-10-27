import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './DepartmentCard.style';

const iconMap = {
  Ionicons,
};

const DepartmentCard = ({ icon, iconLib = 'Ionicons', title, paragraph, buttonText }) => {
  const IconComponent = iconMap[iconLib] || Ionicons;
  return (
    <View style={styles.card}>
      <IconComponent name={icon} size={100} color="#2e6cf6" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.paragraph}>{paragraph}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DepartmentCard;