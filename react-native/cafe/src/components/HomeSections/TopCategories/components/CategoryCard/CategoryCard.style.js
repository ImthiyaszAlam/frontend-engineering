import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../theme/colors';
import { DIMENS } from '../../../../../theme/dimens';

export default StyleSheet.create({
  card: {
    padding: 0, // override base padding for image layout
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 100,
  },

  content: {
    padding: DIMENS.paddingSm,
  },

  title: {
    textAlign: 'center',
    color: COLORS.textPrimary,
    fontSize: DIMENS.textMd,
    fontWeight: '600',
  },
});