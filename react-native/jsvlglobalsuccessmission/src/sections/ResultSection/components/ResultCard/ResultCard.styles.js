import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../../theme';

export default StyleSheet.create({
  card: {
    backgroundColor: colors.surface || '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 0,
    padding: spacing.md,
    shadowColor: colors.shadow || '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
    flex: 1,
    margin: 8,
  },
  image: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 0,
    resizeMode: 'cover',
    marginBottom: spacing.sm,
    backgroundColor: colors.surfaceVariant,
  },
  bottomSection: {
    alignItems: 'flex-start',
    paddingTop: 0,
  },
  name: {
    ...typography.headingSmall,
    color: colors.textPrimary,
    textAlign: 'left',
  },
  stream: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'left',
  },
  percentage: {
    marginTop: 6,
    ...typography.bodyBold,
    color: colors.primary,
  },
});
