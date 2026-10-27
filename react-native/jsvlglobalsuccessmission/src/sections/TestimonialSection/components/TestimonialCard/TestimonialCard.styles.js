import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../../theme';

export default StyleSheet.create({
  card: {
    height: 200,
    backgroundColor: colors.surface,
    borderRadius: 32,
    borderBottomLeftRadius: 0,
    padding: spacing.md,
    margin: spacing.sm,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    minWidth: 200,
    flex: 1,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  star: {
    color: colors.textSecondary,
    fontSize: 18,
    marginRight: 2,
  },
  paragraph: {
    ...typography.body,

    color: colors.textTertiary,
    marginBottom: spacing.sm,
    minHeight: 60,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: spacing.sm,
    backgroundColor: colors.background,
  },
  info: {
    flex: 1,
  },
  name: {
    ...typography.bodyBold,
    color: colors.textPrimary,
  },
  role: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
