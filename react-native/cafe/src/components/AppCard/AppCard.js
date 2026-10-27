import React from 'react';
import { View } from 'react-native';
import styles from './AppCard.style';

const AppCard = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
};

export default AppCard;