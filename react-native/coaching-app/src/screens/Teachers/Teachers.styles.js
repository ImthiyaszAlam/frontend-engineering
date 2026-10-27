import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    minHeight:DIMENS.sectionHeight,
    flex: 1,
    backgroundColor: COLORS.secondary,
  },

  heading: {
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    fontSize: DIMENS.textXl,
    fontWeight: 'bold',
    color: COLORS.primary,
  },

  grid: {
    paddingVertical: DIMENS.sectionPaddingVertical,
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    backgroundColor: COLORS.surface,
    borderRadius: DIMENS.radiusSm,
    padding: DIMENS.paddingMd,
    marginBottom: DIMENS.marginLg,
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: DIMENS.marginSm,
  },

  name: {
    fontSize: DIMENS.textMd,
    fontWeight: 'bold',
    color: COLORS.primary,
  },

  subject: {
    fontSize: DIMENS.textSm,
    color: COLORS.textSecondary,
  },

  exp: {
    fontSize: DIMENS.textSm,
    color: COLORS.accent,
    marginTop: 4,
  },
});