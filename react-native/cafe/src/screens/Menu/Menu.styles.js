import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    paddingTop: DIMENS.paddingLg,
    backgroundColor: COLORS.primary,
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
    flex: 1,
    marginHorizontal: DIMENS.marginXs,
  },
});