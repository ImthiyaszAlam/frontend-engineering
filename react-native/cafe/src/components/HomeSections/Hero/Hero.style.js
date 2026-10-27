import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors';
import { DIMENS } from '../../../theme/dimens';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
  },

  overlay: {
    paddingHorizontal: DIMENS.sectionPaddingHorizontal,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // slight dark overlay
    justifyContent: 'center',
  },

  title: {
    color: COLORS.textPrimary,
    fontSize: DIMENS.textXl,
    fontWeight: 'bold',
    marginBottom: DIMENS.marginMd,
  },

  subtitle: {
    color: COLORS.textSecondary,
    fontSize: DIMENS.textMd,
    marginBottom: DIMENS.marginLg,
    maxWidth: 400,
  },
  button: {   
    alignSelf: 'flex-start',
    
  }
});