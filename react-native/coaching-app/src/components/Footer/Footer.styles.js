import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

const getStyles = (screenWidth) => {
  const isSmall = screenWidth < 600;

  return StyleSheet.create({
    mainContainer: {
      backgroundColor: COLORS.primary,
      flexDirection: 'column',
    },

    container: {
      width: '100%',
      flexDirection: isSmall ? 'column' : 'row',
      justifyContent: isSmall ? 'center' : 'space-between',
      paddingHorizontal: DIMENS.sectionPaddingHorizontal,
      paddingVertical: DIMENS.paddingLg,
      alignItems: isSmall ? 'center' : 'flex-start',
    },

    /* LEFT */
    left: {
      justifyContent: 'center',
      alignItems: 'center',
      width: isSmall ? '100%' : '30%',
      marginBottom: isSmall ? DIMENS.marginMd : 0,
    },

    logo: {
      width: isSmall ? 50 : 60,
      height: isSmall ? 50 : 60,
      marginBottom: DIMENS.marginSm,
    },

    schoolName: {
      fontSize: isSmall ? DIMENS.textMd : DIMENS.textLg,
      fontWeight: 'bold',
      color: COLORS.secondary,
      marginBottom: 6,
      textAlign: isSmall ? 'center' : 'left',
    },

    address: {
      fontSize: DIMENS.textSm,
      color: COLORS.textSecondary,
      textAlign: isSmall ? 'center' : 'left',
    },

    /* RIGHT */
    right: {
      width: isSmall ? '100%' : '65%',
      flexDirection: isSmall ? 'column' : 'row',
      justifyContent: isSmall ? 'center' : 'space-between',
      alignItems: isSmall ? 'center' : 'flex-start',
    },

    column: {
      width: isSmall ? '100%' : '30%',
      marginBottom: isSmall ? DIMENS.marginMd : 0,
      alignItems: isSmall ? 'center' : 'flex-start',
    },

    heading: {
      fontSize: DIMENS.textMd,
      fontWeight: 'bold',
      color: COLORS.accent,
      marginBottom: DIMENS.marginSm,
      textAlign: isSmall ? 'center' : 'left',
    },

    link: {
      fontSize: DIMENS.textSm,
      color: COLORS.secondary,
      marginBottom: 6,
      textAlign: isSmall ? 'center' : 'left',
    },
    linkPressed: {
      color: COLORS.secondaryPressed,
    },
    linkHovered: {
      color: COLORS.secondaryHover,
    },

    bottomBar: {
      paddingVertical: DIMENS.paddingSm,
      borderTopWidth: 1,
      borderTopColor: COLORS.border,
      alignItems: 'center',
    },

    bottomText: {
      fontSize: DIMENS.textSm,
      color: COLORS.textSecondary,
      textAlign: 'center',
    },
  });
};

export default getStyles;