import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Linking } from 'react-native';
import styles from './ContactCard.style';
import AppButton from '../../../../components/util/AppButton';
import { schoolName } from '../../../../content/basicData';

const ContactCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const showAlert = (msg) => {
    if (typeof window !== 'undefined') {
      window.alert(msg);   // web
    } else {
      Alert.alert(msg);    // mobile
    }
  };


  const handleSend = () => {
    console.log('ContactCard payload:', { name, email, phone, message });

    if (!name || !email || !message) {
      showAlert('Please fill all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert('Enter a valid email');
      return;
    }

    if (phone && phone.length < 10) {
      showAlert('Enter a valid phone number');
      return;
    }

    const phoneNumber = schoolName.mobileNumber.replace(/\D/g, '');

    const text = `Hello, I have an inquiry.

Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Message: ${message}`;

    const url = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(text)}`;

    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    } else {
      Linking.openURL(url).catch(() =>
        showAlert('Unable to open WhatsApp')
      );
    }

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Get in touch</Text>
        <Text style={styles.headerSubtitle}>We'd love to hear from you</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <TextInput value={name} onChangeText={setName} placeholder="Your name" style={styles.input} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" style={styles.input} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Phone</Text>
          <TextInput value={phone} onChangeText={setPhone} placeholder="Phone" keyboardType="phone-pad" style={styles.input} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Message"
            style={[styles.input, styles.textArea]}
            multiline
          />
        </View>

        <AppButton
          onPress={handleSend}
          title="Send"
          style={styles.sendButton}
        />
      </View>
    </View>
  );
};

export default ContactCard;