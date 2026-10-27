import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: DIMENS.sectionPaddingVertical,
    backgroundColor: COLORS.secondary,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});