import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors';
import { DIMENS } from '../../../theme/dimens';

export default StyleSheet.create({
  container: {
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    marginTop: DIMENS.marginLg,
  },

  heading: {
    textAlign: 'center',
    color: COLORS.textPrimary,
    fontSize: DIMENS.textLg,
    fontWeight: 'bold',
    marginBottom: DIMENS.marginMd,
  },
  subHeading: {
    textAlign: 'center',
    color: COLORS.textSecondary,
    fontSize: DIMENS.textMd,
    marginBottom: DIMENS.marginMd,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: DIMENS.marginMd,
  },
  item: {
    flex: 1,                 // 👈 equal width
    marginRight: 12,
  },
});