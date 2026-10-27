import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.textPrimary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    paddingVertical: 1,
  },

  left: {
    flexDirection: 'row',      // 👈 image + text side by side
    alignItems: 'center',
    gap: 10,
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
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
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
    color: COLORS.secondary,
  },
  hamburgerTextPressed: {
    color: COLORS.secondaryPressed,
  },
  hamburgerTextHovered: {
    color: COLORS.secondaryHover,
  },
});