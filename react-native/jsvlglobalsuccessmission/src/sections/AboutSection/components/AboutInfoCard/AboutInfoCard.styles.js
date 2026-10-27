import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../../../theme';

const styles = StyleSheet.create({
  aboutInfoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: spacing.md,
    shadowColor: colors.shadow || '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 50,
    elevation: 2,
    borderBottomLeftRadius: 0,
  },

  aboutInfoCardLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  aboutInfoCardRight: {
    flex: 1,
    justifyContent: 'center',
  },

  aboutInfoCardTitle: {
    ...typography.headingSmall,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },

  aboutInfoCardSubtitle: {
    ...typography.body,
    color: colors.textTertiary,
  },
});

export default styles;