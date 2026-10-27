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
    paddingVertical:DIMENS.sectionPaddingVertical,
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },


});