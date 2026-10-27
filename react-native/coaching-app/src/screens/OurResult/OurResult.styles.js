import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

const getResponsiveStyles = (screenWidth) => {
  let numColumns;
  if (screenWidth < 600) {
    numColumns = 2;
  } else if (screenWidth < 900) {
    numColumns = 3;
  } else {
    numColumns = 4;
  }

  const cardWidth = `${(100 / numColumns) - 2}%`; // Subtract 2% for spacing

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.secondary,
    },

    content: {
      paddingBottom: DIMENS.paddingLg,
    },

    heading: {
      paddingHorizontal: DIMENS.sectionPaddingHorizontal,
      fontSize: DIMENS.textXl,
      fontWeight: 'bold',
      color: COLORS.primary,
      marginBottom: DIMENS.marginLg,
    },

    grid: {
      paddingHorizontal: DIMENS.sectionPaddingHorizontal,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },

    card: {
      width: cardWidth,
      backgroundColor: COLORS.surface,
      borderRadius: DIMENS.radiusMd,
      overflow: 'hidden',
      marginBottom: DIMENS.marginLg,
      alignItems: 'center',
      paddingBottom: DIMENS.paddingMd,
    },

    image: {
      width: '100%',
      height: screenWidth < 600 ? 120 : 150, // Smaller image on small screens
    },

    name: {
      fontSize: DIMENS.textMd,
      fontWeight: 'bold',
      color: COLORS.primary,
      marginTop: DIMENS.marginSm,
    },

    exam: {
      fontSize: DIMENS.textSm,
      color: COLORS.textSecondary,
    },

    score: {
      fontSize: DIMENS.textMd,
      color: COLORS.accent,
      fontWeight: 'bold',
      marginTop: 4,
    },
  });
};

export default getResponsiveStyles;