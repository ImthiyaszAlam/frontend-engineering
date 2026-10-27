import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  hero: {
    paddingHorizontal:0,
    height: 250,
    justifyContent: 'center',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroText: {
    color: COLORS.textPrimary,
    fontSize: DIMENS.textXl,
    fontWeight: 'bold',
  },

  content: {
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
  },

  title: {
    color: COLORS.textPrimary,
    fontSize: DIMENS.textLg,
    fontWeight: 'bold',
    marginBottom: DIMENS.marginSm,
  },

  description: {
    color: COLORS.textSecondary,
    fontSize: DIMENS.textMd,
    marginBottom: DIMENS.marginLg,
    lineHeight: 22,
  },

  row: {
    justifyContent: 'space-between',
  },

  item: {
    flex: 1,
    marginHorizontal: DIMENS.marginXs,
  },

  featureTitle: {
    color: COLORS.textPrimary,
    fontSize: DIMENS.textMd,
    fontWeight: '600',
    marginBottom: 4,
  },

  featureDesc: {
    color: COLORS.textSecondary,
    fontSize: DIMENS.textSm,
  },
});