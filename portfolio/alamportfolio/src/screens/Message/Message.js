import React from 'react';
import { View, Text } from 'react-native';
import styles from './Message.styles';
import Footer from '../../components/Footer/Footer';
import { ScrollView } from 'react-native';

const Message = () => (


  <ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
      <Text style={styles.title}>Message</Text>
      <Text style={styles.subtitle}>Read the latest message from our team.</Text>

    </View>
    <Footer />
  </ScrollView>
);

export default Message;
