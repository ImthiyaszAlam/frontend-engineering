import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors';
import { DIMENS } from '../../../theme/dimens';

export default StyleSheet.create({
  container: {
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    marginTop: DIMENS.marginXl,
  },

  heading: {
    color: COLORS.textPrimary,
    fontSize: DIMENS.textLg,
    fontWeight: 'bold',
    marginBottom: DIMENS.marginMd,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: DIMENS.marginMd,
  },

  item: {
    flex: 1, // equal width (no manual width)
    marginRight: DIMENS.marginSm,
    height: 180,
  },
});