import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  hero: {
    height: 220,
    justifyContent: 'center',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroText: {
    color: COLORS.textPrimary,
    fontSize: DIMENS.textXl,
    fontWeight: 'bold',
  },

  content: {
    padding: DIMENS.sectionPaddingHorizontal,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // ✅ important
  },

  left: {
    flex: 1,
    marginRight: DIMENS.marginSm,
  },

  right: {
    flex: 1,
  },

  infoCard: {
    marginBottom: DIMENS.marginSm,
  },

  label: {
    color: COLORS.textSecondary,
    fontSize: DIMENS.textSm,
  },

  value: {
    color: COLORS.textPrimary,
    fontSize: DIMENS.textMd,
    fontWeight: '600',
  },

  formCard: {
    marginTop: 0, // ✅ remove vertical shift
  },

  formTitle: {
    color: COLORS.textPrimary,
    fontSize: DIMENS.textMd,
    fontWeight: 'bold',
    marginBottom: DIMENS.marginMd,
  },

  input: {
    backgroundColor: COLORS.primary,
    borderWidth: DIMENS.borderWidthThin,
    borderColor: COLORS.border,
    borderRadius: DIMENS.radiusMd,
    padding: DIMENS.paddingSm,
    color: COLORS.textPrimary,
    marginBottom: DIMENS.marginMd,
  },

  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});