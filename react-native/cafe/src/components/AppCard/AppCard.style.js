import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
    container: {
        backgroundColor: COLORS.surface,
        borderRadius: DIMENS.radiusMd,
        padding: DIMENS.paddingMd,
        borderWidth: DIMENS.borderWidthThin,
        borderColor: COLORS.border,
    },
});