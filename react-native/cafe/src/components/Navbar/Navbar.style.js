import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    width:'100%',
    height: 60,
    backgroundColor: COLORS.primary,
    paddingVertical: DIMENS.paddingVertical,
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
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
  navLinks:{
    flexDirection: 'row',
    gap: 16,
  },
  linkText:{
    color: COLORS.secondary,
  },
  activeLinkText: {
  color: COLORS.accent,
  fontWeight: 'bold',
},
});