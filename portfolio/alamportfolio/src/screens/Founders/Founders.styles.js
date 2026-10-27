import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    minHeight: DIMENS.sectionHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
});
