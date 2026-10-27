import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

const styles = StyleSheet.create({
    cardContainer: {
        paddingVertical: DIMENS.paddingLg,
        backgroundColor: 'transparent',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    iconContainer: {
        fontSize: 48, // reduce for mobile in component if needed
    },
    numberText: {
        fontSize: 32, // reduce for mobile in component
        fontWeight: '700',
        color: COLORS.accent,
        textAlign: 'center',
    },
    titleText: {
        fontSize: 16, // reduce for mobile if needed
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 0.92)',
        textAlign: 'center',
        letterSpacing: 0.5,
    },
});

export default styles;