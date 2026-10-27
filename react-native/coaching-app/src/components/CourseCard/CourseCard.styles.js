import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
    card: {
        flexGrow: 1,
        minWidth: 220,
        maxWidth: 340,
        backgroundColor: COLORS.surface,
        borderRadius: DIMENS.radiusSm,
        overflow: 'hidden',
        height: 300,
        marginBottom: DIMENS.marginLg,
        elevation: 9,
    },

    image: {
        width: '100%',
        height: 140,
    },

    content: {
        padding: DIMENS.paddingMd,
    },

    title: {
        fontSize: DIMENS.textLg,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginBottom: DIMENS.marginSm,
    },

    desc: {
        fontSize: DIMENS.textSm,
        color: COLORS.textSecondary,
        lineHeight: 18,
        marginBottom: DIMENS.marginMd,
    },

    enrollbtn: {
        alignSelf: 'flex-start',
    },

});