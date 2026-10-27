import { StyleSheet, Platform } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingHorizontal: layout.horizontalPaddingPercent,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    width: '100%',
    zIndex: 100,
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    // For iOS/Android fallback, use position: 'absolute' with elevation if needed
    ...(Platform.OS !== 'web' ? { position: 'absolute', top: 0, left: 0, right: 0, elevation: 10 } : {}),
  },
  left: {
    minWidth: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    height: 40, // fallback if layout.logoHeight is not defined
    ...(layout.logoHeight ? { height: layout.logoHeight } : {}),
    aspectRatio: 1.8,
    width: 'auto',
    maxWidth: 120,
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.lg,
  },
  navItem: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: layout.borderRadius,
    backgroundColor: 'transparent',
    ...typography.body,
    color: colors.textPrimary,
    transitionProperty: Platform.OS === 'web' ? 'color' : undefined,
    transitionDuration: Platform.OS === 'web' ? '0.2s' : undefined,
  },
  navItemText: {
    ...typography.body,
    color: colors.textPrimary,
    textTransform: 'capitalize',
  },
  navItemHovered: {
    color: colors.primary,
  },
  right: {
    minWidth: 120,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  applyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm,
    borderRadius: layout.borderRadius,
    gap: spacing.sm,
    opacity: 1,
    transitionProperty: Platform.OS === 'web' ? 'opacity' : undefined,
    transitionDuration: Platform.OS === 'web' ? '0.2s' : undefined,
  },
  applyButtonHovered: {
    opacity: 0.85,
  },
  applyButtonText: {
    ...typography.body,
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: spacing.xs,
  },
  applyButtonIcon: {
    color: colors.white,
    marginRight: spacing.xs,
  },
});

export default styles;
