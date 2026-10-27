import { StyleSheet } from 'react-native';
import { colors,layout } from '../../theme';
export default StyleSheet.create({
  container: {
    backgroundColor:colors.primary,
    paddingVertical: 24,
    height: layout.sectionHeight,
    paddingLeft: '10%',
    paddingRight: '10%',
    justifyContent: 'center',
  },
  headingWhite: {
    color: colors.white,
  },
  subTitleWhite: {
    color: colors.white,
  },
  pagination: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d1d5db',
    marginHorizontal: 6,
  },
  dotActive: {
    backgroundColor: '#0f172a',
    width: 20,
    borderRadius: 10,
  },
});
