import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export default StyleSheet.create({

    container: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },

    pressed: {
        transform: [{ scale: 0.96 }],
        shadowOpacity: 0.5,
    },

    hovered: {
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: '#020617',
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 1,
    },

    iconLeft: {
        marginRight: 8,
    },

    iconRight: {
        marginLeft: 8,
    },

    disabled: {
        opacity: 0.4,
    },
});