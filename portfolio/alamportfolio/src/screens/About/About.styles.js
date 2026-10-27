import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },


  section: {
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    marginBottom: DIMENS.marginLg,
  },

  heading: {
    fontSize: DIMENS.textXl,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: DIMENS.marginSm,
  },

  text: {
    fontSize: DIMENS.textMd,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },

  row: {
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: DIMENS.marginLg,
    gap: 20,
  },

  image: {
    width: '45%',
    height: 200,
    borderRadius: DIMENS.radiusMd,
  },

  rowContent: {
    width: '55%',
  },
});