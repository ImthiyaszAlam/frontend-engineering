import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  card: {
    flex: 1,
    padding: 0,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 120,
  },

  content: {
    padding: DIMENS.paddingSm,
  },

  title: {
    color: COLORS.textPrimary,
    fontSize: DIMENS.textMd,
    fontWeight: '600',
  },

  price: {
    color: COLORS.accent,
    fontSize: DIMENS.textSm,
    marginTop: 4,
  },
});