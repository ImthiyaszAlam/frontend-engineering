import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';
import styles from './Contact.styles';
import { CONTACT_INFO } from '../../content/contactData';
import AppCard from '../../components/AppCard/AppCard';
import AppButton from '../../components/AppButton/AppButton';
import { COLORS } from '../../theme/colors'; // ✅ added

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>

      {/* Hero */}
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
        }}
        style={styles.hero}
      >
        <View style={styles.overlay}>
          <Text style={styles.heroText}>Contact Us</Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>

        {/* ✅ FIXED: infoRow */}
        <View style={styles.infoRow}>

          {/* LEFT */}
          <View style={styles.left}>
            {CONTACT_INFO.map((item) => (
              <AppCard key={item.id} style={styles.infoCard}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </AppCard>
            ))}
          </View>

          {/* RIGHT */}
          <View style={styles.right}>
            <AppCard style={styles.formCard}>

              <Text style={styles.formTitle}>Send a Message</Text>

              <TextInput
                placeholder="Your Name"
                placeholderTextColor={COLORS.muted}
                style={styles.input}
                value={name}
                onChangeText={setName}
              />

              <TextInput
                placeholder="Your Message"
                placeholderTextColor={COLORS.muted}
                style={[styles.input, styles.textArea]}
                value={message}
                onChangeText={setMessage}
                multiline
              />

              <AppButton title="Send Message" />
            </AppCard>
          </View>

        </View>

      </View>

    </View>
  );
};

export default Contact;