import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';
import SectionTop from '../../components/SectionTop/SectionTop';
import AppButton from '../../components/AppButton/AppButton';
import Footer from '../../components/Footer/Footer';
import useContactForm from '../../hooks/useContactForm';
import { basicdata } from '../../content/basicdata';

const Contact = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const { values, errors, handleChange, handleSubmit } = useContactForm();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.secondary,
    },
    content: {
      // content container style if needed
    },
    wrapper: {
      paddingHorizontal: DIMENS.sectionPaddingHorizontal,
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
    },
    info: {
      width: isMobile ? '100%' : '40%',
      marginBottom: isMobile ? DIMENS.marginMd : 0,
    },
    infoTitle: {
      fontSize: DIMENS.textLg,
      fontWeight: 'bold',
      color: COLORS.primary,
      marginBottom: DIMENS.marginMd,
    },
    infoText: {
      fontSize: DIMENS.textMd,
      color: COLORS.textSecondary,
      marginBottom: DIMENS.marginSm,
    },
    form: {
      width: isMobile ? '100%' : '55%',
    },
    input: {
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: DIMENS.radiusSm,
      padding: DIMENS.paddingMd,
      marginBottom: DIMENS.marginMd,
    },
    inputError: {
      borderColor: 'red',
    },
    error: {
      color: 'red',
      fontSize: 12,
      marginBottom: DIMENS.marginMd,
      marginTop: -DIMENS.marginMd / 2,
    },
    textArea: {
      height: 100,
      textAlignVertical: 'top',
    },
    button: {
      alignSelf: 'flex-start',
    },
    mapContainer: {
      marginTop: 40,
      borderRadius: 0,
      overflow: 'hidden',
    },
    map: {
      width: '100%',
      height: isMobile ? 200 : 300,
      border: 0,
    },
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <SectionTop image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Contact Us" />

      <View style={styles.wrapper}>

        {/* LEFT SIDE */}
        <View style={styles.info}>
          <Text style={styles.infoTitle}>Get in Touch</Text>

          <Text style={styles.infoText}>📍 {basicdata.address}</Text>
          <Text style={styles.infoText}>📞 {basicdata.phones[0]}</Text>
          <Text style={styles.infoText}>📧 {basicdata.email}</Text>
        </View>

        {/* RIGHT SIDE */}
        <View style={styles.form}>
          <TextInput
            placeholder="Your Name"
            style={[styles.input, errors.name && styles.inputError]}
            value={values.name}
            onChangeText={(text) => handleChange('name', text)}
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}

          <TextInput
            placeholder="Your Phone"
            style={[styles.input, errors.phone && styles.inputError]}
            keyboardType="phone-pad"
            value={values.phone}
            onChangeText={(text) => handleChange('phone', text)}
          />
          {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

          <TextInput
            placeholder="Your Message"
            style={[styles.input, styles.textArea, errors.message && styles.inputError]}
            multiline
            value={values.message}
            onChangeText={(text) => handleChange('message', text)}
          />
          {errors.message && <Text style={styles.error}>{errors.message}</Text>}

          <AppButton style={styles.button} title="Send Message" onPress={handleSubmit} />
        </View>

      </View>

      {/* MAP */}
      {/* <View style={styles.mapContainer}>
        <iframe
          src="https://maps.google.com/maps?q=Bhagalpur%20Bihar&t=&z=13&ie=UTF8&iwloc=&output=embed"
          style={styles.map}
        />
      </View> */}

       {/* MAP */}
      <View style={styles.mapContainer}>
        <iframe
          src={`https://maps.google.com/maps?q=${basicdata.location.lat},${basicdata.location.lng}&z=15&output=embed`}
          style={styles.map}
        />
      </View>
      
      <Footer />
    </ScrollView>
  );
};

export default Contact;