import React from 'react';
import { ScrollView, View, Text, useWindowDimensions } from 'react-native';
import styles from './Courses.styles';
import { courses } from '../../content/courses';
import CourseCard from '../../components/CourseCard/CourseCard';
import Footer from '../../components/Footer/Footer';
import SectionTop from '../../components/SectionTop/SectionTop';

const Courses = () => {
    const { width } = useWindowDimensions();
    const cardLayout =
        width <= 640
            ? { flexBasis: '100%' }
            : width <= 900
                ? { flexBasis: '48%' }
                : { flexBasis: '31%' };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SectionTop image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Our Courses" />


            <View style={styles.container}>


                <View style={styles.grid}>
                    {courses.map((item) => (
                        <CourseCard key={item.id} item={item} style={cardLayout} />
                    ))}
                </View>
            </View>

            <Footer />
        </ScrollView>
    );
};

export default Courses;