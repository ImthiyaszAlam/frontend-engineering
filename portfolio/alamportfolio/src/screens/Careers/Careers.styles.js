import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },

  content: {
    paddingBottom: DIMENS.paddingLg,
  },

  heading: {
    fontSize: DIMENS.textXl,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: DIMENS.marginLg,
  },

  grid: {
    
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  card: {
    backgroundColor: COLORS.surface,
    borderRadius: DIMENS.radiusSm,
    padding: DIMENS.paddingMd,
    marginBottom: DIMENS.marginLg,
  },

  role: {
    fontSize: DIMENS.textLg,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: DIMENS.marginSm,
  },

  meta: {
    fontSize: DIMENS.textSm,
    color: COLORS.textSecondary,
    marginBottom: DIMENS.marginSm,
  },

  desc: {
    fontSize: DIMENS.textSm,
    color: COLORS.textSecondary,
    lineHeight: 18,
    marginBottom: DIMENS.marginMd,
  },

  applybutton: {
    alignSelf: 'flex-start',
  },


});