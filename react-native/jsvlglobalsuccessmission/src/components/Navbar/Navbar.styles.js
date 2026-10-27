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
    ...(Platform.OS !== 'web' ? { position: 'absolute', top: 0, left: 0, right: 0, elevation: 10 } : {}),
  },

  left: {
    minWidth: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },

  logo: {
    height: 40,
    ...(layout.logoHeight ? { height: layout.logoHeight } : {}),
    aspectRatio: 1.8,
    width: 'auto',
    maxWidth: 120,
  },

  title: {
    ...typography.large,
    color: colors.primary,
    fontWeight: 'bold',
    marginLeft: spacing.sm,
  },

  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.md,
  },

  navItem: {
    paddingHorizontal: 0,
    paddingVertical: spacing.sm,
    borderRadius: layout.borderRadius,
    backgroundColor: 'transparent',
    ...typography.body,
    color: colors.textPrimary,
    transitionProperty: Platform.OS === 'web' ? 'color' : undefined,
    transitionDuration: Platform.OS === 'web' ? '0.2s' : undefined,
  },

  navItemText: {
    color: colors.textPrimary,
    textTransform: 'uppercase',
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

  // Mobile Menu Styles
  mobileMenuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
  },

  mobileMenu: {
    backgroundColor: colors.surface,
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.md,
    minHeight: '100%',
  },

  mobileNavItem: {
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  mobileNavItemText: {
    ...typography.body,
    fontWeight: 'bold',
    color: colors.textPrimary,
    fontSize: 18,
  },

  closeMenuButton: {
    marginTop: spacing.lg,
    alignSelf: 'center',
  },

  closeMenuText: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default styles;