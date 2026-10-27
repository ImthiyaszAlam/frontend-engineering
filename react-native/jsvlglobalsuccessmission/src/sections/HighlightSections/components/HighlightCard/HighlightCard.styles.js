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
  iconContainer: {
    fontSize: 48, // reduce for mobile in component if needed
    marginBottom: spacing.md,
  },
  numberText: {
    fontSize: 32, // reduce for mobile in component
    fontWeight: '700',
    color: colors.white,
    marginBottom: spacing.small,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 16, // reduce for mobile if needed
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.92)',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});

export default styles;