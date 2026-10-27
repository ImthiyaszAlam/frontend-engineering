import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  card: {
    flexGrow: 1,
    maxWidth: 320,
    backgroundColor: COLORS.surface,
    borderRadius: DIMENS.radiusSm,
    padding: DIMENS.paddingMd,
    marginBottom: DIMENS.marginLg,
  },

  rating: {
    color: '#FFD700', // gold stars
    fontSize: 16,
    marginBottom: DIMENS.marginSm,
  },

  feedback: {
    fontSize: DIMENS.textSm,
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: DIMENS.marginMd,
  },

  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  name: {
    fontSize: DIMENS.textMd,
    fontWeight: 'bold',
    color: COLORS.primary,
  },

  role: {
    fontSize: DIMENS.textSm,
    color: COLORS.textSecondary,
  },
});