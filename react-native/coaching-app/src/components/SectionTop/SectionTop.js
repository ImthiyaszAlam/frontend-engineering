import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { DIMENS } from '../../theme/dimens';

const SectionTop = ({ image, title }) => {
    return (
        <ImageBackground
            source={{ uri: image }}
            style={styles.container}
            resizeMode="cover"
        >
            {/* Overlay */}
            <View style={styles.overlay} />

            {/* Title */}
            <Text style={styles.title}>{title}</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: DIMENS.marginLg,
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    title: {
        fontSize: DIMENS.textXl + 4,
        fontWeight: 'bold',
        color: '#fff',
        zIndex: 1,
        textAlign: 'center',
        textShadowColor: 'rgba(0,0,0,0.6)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
});

export default SectionTop;