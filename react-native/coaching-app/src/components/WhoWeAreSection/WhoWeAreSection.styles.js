import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondary,
  },

  containerRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },

  containerColumn: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 18,
  },

  image: {
    height: 240,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },

  imageWide: {
    width: '45%',
    marginBottom: 0,
  },

  imageNarrow: {
    width: '100%',
  },

  content: {
    justifyContent: 'center',
  },

  contentWide: {
    width: '52%',
    paddingLeft: 20,
  },

  contentNarrow: {
    width: '100%',
    paddingLeft: 0,
  },

  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 14,
  },

  paragraph: {
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 22,
    marginBottom: 18,
  },

  knowmorebtn: {
    alignSelf: 'flex-start',
  },


});