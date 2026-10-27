import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default (width, height) => {
  const isLargeScreen = width > 768;

  return StyleSheet.create({
    container: {
      flexDirection: isLargeScreen ? 'row' : 'column',
      justifyContent: isLargeScreen ? 'space-between' : 'flex-start',
      alignItems: isLargeScreen ? 'center' : 'stretch',
      minHeight: isLargeScreen ? DIMENS.sectionHeight : 'auto',
      paddingHorizontal: isLargeScreen ? width * 0.1 : DIMENS.paddingMd,
      paddingVertical: isLargeScreen ? height * 0.02 : DIMENS.paddingVertical,
      backgroundColor: COLORS.secondary,
    },


    heading: {
      fontSize: DIMENS.textXl,
      fontWeight: 'bold',
      color: COLORS.primary,
      marginBottom: DIMENS.marginLg,
      textAlign: isLargeScreen ? 'left' : 'center',
    },

    form: {
      maxWidth: isLargeScreen ? 500 : '100%',
      width: isLargeScreen ? '48%' : '100%',
    },

    input: {
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: DIMENS.radiusSm,
      padding: DIMENS.paddingMd,
      marginBottom: DIMENS.marginMd,
      fontSize: isLargeScreen ? DIMENS.textMd : DIMENS.textSm,
    },

    inputError: {
      borderColor: 'red',
    },

    error: {
      color: 'red',
      fontSize: 12,
      marginBottom: DIMENS.marginMd,
      marginTop: -DIMENS.marginMd / 2,
    },

    textArea: {
      height: isLargeScreen ? 100 : 80,
      textAlignVertical: 'top',
    },

    applybtn: {
      alignSelf: isLargeScreen ? 'flex-start' : 'center',
    },
    callSection: {
    marginTop: isLargeScreen ? 0 : 40,
    padding: 20,
    borderRadius: DIMENS.radiusSm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surface,
    width: isLargeScreen ? '48%' : '100%',
  },

  callTitle: {
    fontSize: isLargeScreen ? 20 : 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 8,
    textAlign: 'center',
  },

  callSubtitle: {
    fontSize: isLargeScreen ? 14 : 12,
    color: COLORS.textSecondary,
    marginBottom: 16,
    textAlign: 'center',
  },

  callBtn: {
    width: '100%',
  },
  });
};