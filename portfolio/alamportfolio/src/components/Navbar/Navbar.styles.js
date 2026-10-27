import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({

    mainContainer: {
          flexDirection: 'column',
    },
container: {
    width: '100%',
    backgroundColor: COLORS.surfaceLight, // ❌ remove primary
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,245,255,0.15)',

    // glow
    shadowColor: '#00F5FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 10,
},

    logo: {
        color: COLORS.accent,
        fontSize: 18,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: COLORS.surface,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: COLORS.border,
    },

    buttonText: {
        color: COLORS.textPrimary,
        fontSize: 14,
    },
    navLinks: {
        textTransform: 'uppercase',
        flexDirection: 'row',
        gap: 32,
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
    linkTextPressed: {
        color: COLORS.secondaryPressed,
    },
    linkTextHovered: {
        color: COLORS.secondaryHover,
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
    activeLinkText: {
        color: COLORS.accent,
        fontWeight: 'bold',
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
        top: 60,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        zIndex: 1000,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 6,
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
    dropdownTextHovered: {
        color: COLORS.secondaryHover,
    },
    // Mobile styles
    containerMobile: {
        paddingHorizontal: DIMENS.paddingMd,
    },
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
        backgroundColor: COLORS.primary,
        paddingHorizontal: DIMENS.sectionPaddingHorizontal,
        paddingVertical: 16,
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