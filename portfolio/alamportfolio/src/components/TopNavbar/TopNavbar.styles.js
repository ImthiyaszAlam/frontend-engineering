import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({


  container: {
    width: '100%',
    backgroundColor: COLORS.primary, // ✅ FIXED
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    paddingVertical: 2,

    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,245,255,0.15)',

    shadowColor: '#00F5FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
  },

  left: {
    flexDirection: 'row',      // 👈 image + text side by side
    alignItems: 'center',
    gap: 10,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoImage: {
    width: 50,
    height: 50,
  },

  logo: {
    fontSize: DIMENS.textLg,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },

  subText: {
    fontSize: DIMENS.textSm,
    color: COLORS.textSecondary,
  },

  address: {
    fontSize: DIMENS.textSm,
    color: COLORS.textSecondary,
  },

  /* RIGHT */
  right: {
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
  },

  phoneContainer: {
    marginBottom: 4,
  },

  text: {
    fontSize: DIMENS.textSm,
    color: COLORS.secondary,
  },
  // Mobile styles
  containerMobile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 0,
    gap: 10,
  },
  leftMobile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoImageMobile: {
    width: 40,
    height: 40,
  },
  logoMobile: {
    fontSize: DIMENS.textMd,
  },
  addressMobile: {
    fontSize: DIMENS.textXs,
  },
  phoneContainerMobile: {
    flexDirection: 'row',
    gap: 10,
  },
  textMobile: {
    fontSize: DIMENS.textXs,
  },
  hamburger: {
    padding: 10,
  },
  hamburgerPressed: {
    opacity: 0.7,
  },
  hamburgerHovered: {
    opacity: 0.8,
  },
  hamburgerText: {
    fontSize: 24,
    color: COLORS.accent,

    textShadowColor: '#00F5FF',
    textShadowRadius: 8,
  },
  hamburgerTextPressed: {
    color: COLORS.secondaryPressed,
  },
  // ==================== NAVBAR STYLES ====================
  navLinks: {
    textTransform: 'uppercase',
    flexDirection: 'row',
    gap: 16,
  },
  link: {
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  linkPressed: {
    opacity: 0.7,
  },
  linkHovered: {
    opacity: 0.8,
  },
  linkText: {
    color: COLORS.secondary,
  },
  linkText: {
    color: COLORS.textSecondary,
    fontWeight: '500',
  },

  linkTextHovered: {
    color: COLORS.accent,
    textShadowColor: '#00F5FF',
    textShadowRadius: 6,
  },

  linkTextPressed: {
    color: COLORS.accentPressed,
  },
  linkContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.secondary,
    fontSize: 12,
    marginLeft: 4,
  },

  modalWrapper: {
    flex: 1,
  },

  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 1,
  },



  pagesDropdown: {
    position: 'absolute',
    top: 70,

    backgroundColor: COLORS.surface, // ✅ FIX
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: 'rgba(0,245,255,0.2)',

    shadowColor: '#00F5FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 12,

    zIndex: 1000,
  },


  dropdownItem: {
    paddingVertical: 5,
  },
  dropdownItemPressed: {
    opacity: 0.7,
  },
  dropdownItemHovered: {
    opacity: 0.8,
  },
  dropdownColumn: {
    flex: 1,
  },
  dropdownText: {
    textTransform: 'uppercase',
    color: COLORS.secondary,
    fontSize: 14,
  },
  dropdownTextPressed: {
    color: COLORS.secondaryPressed,
  },
  dropdownText: {
    textTransform: 'uppercase',
    color: COLORS.textSecondary,
    fontSize: 14,
  },

  dropdownTextHovered: {
    color: COLORS.accent,
    textShadowColor: '#00F5FF',
    textShadowRadius: 6,
  },

  // Mobile navbar styles
  navLinksMobile: {
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
  },
  linkTextMobile: {
    fontSize: DIMENS.textSm,
  },
  dropdownIconMobile: {
    fontSize: 10,
  },
  pagesDropdownMobile: {
    minWidth: 200,
    left: 10,
  },
  mobileMenu: {
    backgroundColor: COLORS.surfaceLight, // ✅ FIX
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    paddingVertical: 16,

    borderTopWidth: 1,
    borderTopColor: 'rgba(0,245,255,0.1)',
  },
  mobileMenuRow: {
    flexDirection: 'row',
  },
  mobileMenuColumn: {
    flex: 1,
  },
  mobileMenuItem: {
    paddingVertical: 8,
  },
  mobileMenuItemPressed: {
    opacity: 0.7,
  },
  mobileMenuItemHovered: {
    opacity: 0.8,
  },
  mobileMenuText: {
    color: COLORS.secondary,
    fontSize: DIMENS.textSm,
    textTransform: 'uppercase',
  },
  mobileMenuTextPressed: {
    color: COLORS.secondaryPressed,
  },
  mobileMenuTextHovered: {
    color: COLORS.secondaryHover,
  },
});