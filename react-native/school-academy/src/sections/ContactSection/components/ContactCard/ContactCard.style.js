import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../../theme';

export default StyleSheet.create({
  card: {
    width: 350,
    backgroundColor: colors.surface || '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:50,
    overflow: 'hidden',
    paddingBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
    marginVertical: spacing.sm,
  },
  header: {
    backgroundColor: colors.textSecondary,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    justifyContent: 'center',
  },
  headerTitle: {
    ...typography.headingSmall,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
    textAlign: 'left',
  },
  headerSubtitle: {
    ...typography.caption,
    color: colors.textPrimary,
    marginTop: 0,
    textAlign: 'left',
  },
  form: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  field: {
    marginBottom: spacing.md,
  },
  label: {
    ...typography.caption,
    color: colors.textTertiary,
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border || '#E0E0E0',
    backgroundColor: colors.background2 || '#F5F5F5',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: colors.textPrimary,
  },
  textArea: {
    minHeight: 92,
    paddingTop: 10,
  },
  sendButton: {
    marginTop: spacing.sm,
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  sendButtonText: {
    color: colors.onPrimary || '#fff',
    fontWeight: '700',
  },
});
