import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../../theme';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginBottom: spacing.md,
    paddingVertical: spacing.lg,
    backgroundColor: 'transparent',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  cardContainerMobile: {
    flex: 1,
  },
  iconContainer: {
    fontSize: 48,
    marginBottom: spacing.md,
  },
  numberText: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.white,
    marginBottom: spacing.small,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.92)',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});

export default styles;
