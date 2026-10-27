import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import Gallery from '../screens/Gallery/Gallery';
import Contact from '../screens/Contact/Contact';
import Courses from '../screens/Courses/Courses';
import Apply from '../screens/Apply/Apply';
import Teachers from '../screens/Teachers/Teachers';
import Founders from '../screens/Founders/Founders';
import Message from '../screens/Message/Message';
import Events from '../screens/Events/Events';
import Testimonial from '../screens/Testimonial/Testimonial';
import OurResult from '../screens/OurResult/OurResult';
import Careers from '../screens/Careers/Careers';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Courses" component={Courses} />
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Apply" component={Apply} />
            <Stack.Screen name="Teachers" component={Teachers} />
            <Stack.Screen name="Founders" component={Founders} />
            <Stack.Screen name="Message" component={Message} />
            <Stack.Screen name="Events" component={Events} />
            <Stack.Screen name="Testimonial" component={Testimonial} />
            <Stack.Screen name="Our Result" component={OurResult} />
            <Stack.Screen name="Careers" component={Careers} />
        </Stack.Navigator>
    );
};

export default AppNavigator;