import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },

 
  wrapper: {
    paddingHorizontal:DIMENS.sectionPaddingHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  info: {
    width: '40%',
  },

  infoTitle: {
    fontSize: DIMENS.textLg,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: DIMENS.marginMd,
  },

  infoText: {
    fontSize: DIMENS.textMd,
    color: COLORS.textSecondary,
    marginBottom: DIMENS.marginSm,
  },

  form: {
    width: '55%',
  },

  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: DIMENS.radiusSm,
    padding: DIMENS.paddingMd,
    marginBottom: DIMENS.marginMd,
  },

  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },

  button: {
    alignSelf: 'flex-start',
  
  },

  mapContainer: {
  marginTop: 40,
  borderRadius: 0,
  overflow: 'hidden',
},

map: {
  width: '100%',
  height: 300,
  border: 0,
},
});