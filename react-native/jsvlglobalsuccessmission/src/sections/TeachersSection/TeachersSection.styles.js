import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';

export default StyleSheet.create({
  container: {
    height: layout.sectionHeight,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  title: {
    ...typography.headingLarge,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  cardWrapper: {
    flexBasis: '22%',
    marginHorizontal: spacing.sm,
    marginBottom: spacing.md,
    minWidth: 150,
    maxWidth: 200,
  },
});
