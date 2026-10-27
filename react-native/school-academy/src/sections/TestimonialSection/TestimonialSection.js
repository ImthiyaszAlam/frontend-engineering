
import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from './TestimonialSection.style';
import TestimonialCard from './components/TestimonialCard/TestimonialCard';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { testimonialSectionHeader } from '../../content/sectionheaderdata';
import { testimonialData } from '../../content/testimonialData';

const TestimonialSection = () => {
    return (
        <ImageBackground
            source={{ uri: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} // Change to your preferred background image
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay} pointerEvents="none" />
            <View style={styles.contentWrapper}>
                <SectionTopBar
                    title={testimonialSectionHeader.title}
                    heading={testimonialSectionHeader.heading}
                    subTitle={testimonialSectionHeader.subTitle}
                    align={testimonialSectionHeader.align}
                    headingStyle={styles.headingWhite}
                    subTitleStyle={styles.subTitleWhite}
                />
                <View style={{ flexDirection: 'column' }}>
                    {[0, 1].map(row => (
                        <View key={row} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                            {testimonialData.slice(row * 4, row * 4 + 4).map((item) => (
                                <TestimonialCard
                                    key={item.name}
                                    text={item.text}
                                    image={item.image}
                                    name={item.name}
                                    role={item.role}
                                />
                            ))}
                        </View>
                    ))}
                </View>
            </View>
        </ImageBackground>
    );
};

export default TestimonialSection;