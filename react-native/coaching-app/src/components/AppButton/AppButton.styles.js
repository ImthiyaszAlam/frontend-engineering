import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
    container: {
        backgroundColor: COLORS.accent,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: DIMENS.radiusxxl,
        alignItems: 'center',
        justifyContent: 'center',
    },

    pressed: {
        backgroundColor: COLORS.accentPressed,
    },

    hovered: {
        backgroundColor: COLORS.accentHover,
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: COLORS.primary,
        fontSize: 14,
        fontWeight: '600',
    },

    iconLeft: {
        marginRight: 8,
    },

    iconRight: {
        marginLeft: 8,
    },

    disabled: {
        backgroundColor: COLORS.muted,
    },
});