import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    paddingVertical: DIMENS.paddingMd,
    alignItems: 'center',
    borderTopWidth: DIMENS.borderWidthThin,
    borderTopColor: COLORS.border,
  },

  text: {
    color: COLORS.textSecondary,
    fontSize: DIMENS.textSm,
  },
});