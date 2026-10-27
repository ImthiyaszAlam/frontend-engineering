import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../theme/colors';
import { DIMENS } from '../../../../../theme/dimens';

export default StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: DIMENS.marginMd,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: DIMENS.marginSm,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: DIMENS.radiusPill,
    marginRight: DIMENS.marginSm,
  },

  userInfo: {
    justifyContent: 'center',
  },

  name: {
    color: COLORS.textPrimary,
    fontSize: DIMENS.textMd,
    fontWeight: '600',
  },

  profession: {
    color: COLORS.textSecondary,
    fontSize: DIMENS.textSm,
  },

  rating: {
    color: COLORS.accent,
    fontSize: DIMENS.textSm,
  },

  feedback: {
    color: COLORS.textSecondary,
    fontSize: DIMENS.textSm,
    lineHeight: 20,
  },
});