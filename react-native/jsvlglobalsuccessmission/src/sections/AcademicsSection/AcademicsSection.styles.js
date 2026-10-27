import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: layout.horizontalPaddingPercent,
    minHeight: layout.sectionHeight,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.md,
  },
  title: {
    ...typography.headingLarge,
    color: colors.text,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary || colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
});