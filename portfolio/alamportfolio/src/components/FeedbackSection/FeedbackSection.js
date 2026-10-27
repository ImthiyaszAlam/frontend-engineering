import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import styles from './FeedbackSection.styles';
import { testimonials } from '../../content/testimonials';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const FeedbackSection = () => {
    const { width } = useWindowDimensions();
    
    // Responsive breakpoints for different screen sizes
    const getResponsiveConfig = () => {
        if (width < 480) {
            // Mobile: extra small
            return { columns: 1, gap: 12 };
        } else if (width < 768) {
            // Mobile/Tablet: small
            return { columns: 1, gap: 12 };
        } else if (width < 1024) {
            // Tablet: medium
            return { columns: 2, gap: 16 };
        } else if (width < 1440) {
            // Desktop: large
            return { columns: 3, gap: 20 };
        } else {
            // Desktop: extra large
            return { columns: 4, gap: 24 };
        }
    };

    const { columns, gap } = getResponsiveConfig();
    
    // Calculate card width accounting for gaps
    const totalGapWidth = gap * (columns - 1);
    const availableWidth = 100 - totalGapWidth;
    const cardWidth = `${availableWidth / columns}%`;

    return (
        <View style={[styles.container, { paddingHorizontal: width < 480 ? 12 : width < 768 ? 16 : '10%' }]}>
            <View style={[styles.grid, { gap }]}>
                {testimonials.slice(0, 4).map((item) => (
                    <TestimonialCard 
                        key={item.id} 
                        item={item} 
                        style={{ width: cardWidth, marginBottom: gap }} 
                    />
                ))}
            </View>
        </View>
    );
};

export default FeedbackSection;