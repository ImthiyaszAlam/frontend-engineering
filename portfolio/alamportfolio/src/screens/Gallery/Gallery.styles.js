import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },


  grid: {
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    paddingVertical: DIMENS.sectionPaddingVertical,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  card: {
    flex: 1,                // each card takes equal space
    marginBottom: DIMENS.marginMd,
    marginHorizontal: DIMENS.marginSm / 2, // small gap between cards
    borderRadius: DIMENS.radiusSm,
    overflow: 'hidden',
    minWidth: '32%',        // ensures only 3 per row
  },

  image: {
    width: '100%',
    height: 200,            // fixed height
    borderRadius: DIMENS.radiusSm,
  },
});