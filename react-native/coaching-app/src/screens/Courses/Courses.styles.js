import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    paddingHorizontal:DIMENS.sectionPaddingHorizontal,
    flex: 1,
    backgroundColor: COLORS.secondary,
  },

  content: {
    paddingHorizontal: DIMENS.paddingXl,
    paddingVertical: DIMENS.paddingLg,
  },

  heading: {
    fontSize: DIMENS.textXl,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: DIMENS.marginLg,
  },

grid: {
  paddingVertical:DIMENS.sectionPaddingVertical,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between', // ✅ creates equal gaps
},
});