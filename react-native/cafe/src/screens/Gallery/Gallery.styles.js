import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  hero: {
    height: 220,
    justifyContent: 'center',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroText: {
    color: COLORS.textPrimary,
    fontSize: DIMENS.textXl,
    fontWeight: 'bold',
  },

  content: {
    padding: DIMENS.sectionPaddingHorizontal,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: DIMENS.marginSm,
  },

  image: {
    width: '32%', // 👈 3 images per row
    height: 120,
    borderRadius: DIMENS.radiusMd,
  },
});