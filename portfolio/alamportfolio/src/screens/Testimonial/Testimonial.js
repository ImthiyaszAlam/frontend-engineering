import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './Testimonial.styles';
import { testimonials } from '../../content/testimonials';
import SectionTop from '../../components/SectionTop/SectionTop';
import Footer from '../../components/Footer/Footer';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

const Testimonial = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      <View
        style={styles.container}>


        <SectionTop
          title="Testimonials"
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        />

        <Text style={styles.heading}>What Our Students Say</Text>

        <View style={styles.grid}>
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </View>

      </View>

      <Footer />
    </ScrollView>
  );
};

export default Testimonial;