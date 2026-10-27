import React, { useMemo, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './EnrollmentCard.style';
import AppButton from '../util/AppButton';
import { Linking } from 'react-native';
const DEFAULT_SUBTITLE = 'Fill in your details to get started.';

const EnrollmentCard = ({
  subtitle = DEFAULT_SUBTITLE,
  onEnroll,
  onClose,
  style,
}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');

  const payload = useMemo(
    () => ({
      name,
      phoneNumber,
      course,
      message,
    }),
    [name, phoneNumber, course, message]
  );

  const handleEnrollPress = () => {
    // 1. Validate fields
    if (!name || !phoneNumber || !course) {
      alert('Please fill all required fields');
      return;
    }

    if (phoneNumber.length < 10) {
      alert('Enter a valid phone number');
      return;
    }

    // 2. Prepare WhatsApp message
    const text = `Hi, I want to enroll.

Name: ${name}
Phone: ${phoneNumber}
Course: ${course}
Message: ${message || 'N/A'}`;

    const url = `https://wa.me/9898989898?text=${encodeURIComponent(text)}`;

    // 3. Open WhatsApp
    Linking.openURL(url).catch(() => {
      alert('Unable to open WhatsApp');
    });

    // 4. Close modal
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <View style={[style, styles.card]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Start your Enrollment</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#9E9E9E"
            style={styles.input}
            accessibilityLabel="Name"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter your phone number"
            placeholderTextColor="#9E9E9E"
            keyboardType="phone-pad"
            style={styles.input}
            accessibilityLabel="Phone Number"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Choose course</Text>
          <TextInput
            value={course}
            onChangeText={setCourse}
            placeholder="e.g. Computer Science"
            placeholderTextColor="#9E9E9E"
            style={styles.input}
            accessibilityLabel="Choose course"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Type Message</Text>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Your message"
            placeholderTextColor="#9E9E9E"
            style={[styles.input, styles.textArea]}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            accessibilityLabel="Type Message"
          />
        </View>

        <AppButton
          title="Enroll Now"
          onPress={handleEnrollPress}
          style={styles.enrollButton}
        />
      </View>
    </View>
  );
};

export default EnrollmentCard;

