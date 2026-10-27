import { View, Text, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from './AdmissionCard.styles';

const AdmissionCard = ({ onApply }) => {
  return (
    <BlurView intensity={10} tint="dark" style={styles.card}>

      {/* 🔥 Discount Badge */}
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>30% OFF</Text>
      </View>

      {/* ✅ Title */}
      <Text style={styles.title}>
        2026{" "}
        <Text style={styles.admissionText}>Admissions Open</Text>
      </Text>

      {/* ✅ Subtitle */}
      <Text style={styles.subtitle}>
        Enroll now to give your child the best learning experience.
      </Text>

      {/* ✅ Info */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>✔ Classes: 11 , 12 & Competition Class</Text>
        <Text style={styles.infoText}>✔ Limited Seats Available</Text>
        <Text style={styles.infoText}>✔ Affordable Fees</Text>
      </View>

      {/* 🔥 CTA Button */}
      <Pressable
        onPress={onApply}
        style={({ pressed }) => [
          styles.applyBtn,
          pressed && styles.applyBtnPressed,
        ]}
        android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
      >
        <Text style={styles.applyBtnText}>Enroll Now</Text>
      </Pressable>

    </BlurView>
  );
};

export default AdmissionCard;