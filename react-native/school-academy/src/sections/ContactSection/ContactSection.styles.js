import { StyleSheet } from 'react-native';
import { colors, spacing, typography,layout } from '../../theme';

export default StyleSheet.create({
  backgroundImage: {
    width: '100%',
    paddingVertical: spacing.large,
    height: layout.sectionHeight,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.85)', 
    zIndex: 0,
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    paddingVertical: spacing.large,
    paddingHorizontal: '10%',
    justifyContent: 'center',
    zIndex: 1,
  },
  root: {
    justifyContent: 'space-between',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  heading: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 16,
  },
  label: {
    fontSize: typography.small,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 6,
  },
  text: {
    color: colors.textSecondary,
    marginTop: 4,
    fontSize: typography.medium,
  },
  whatsapp: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  whatsappIcon: {
    marginTop: 12,
    backgroundColor: colors.backgroundElevated || '#fff',
    padding: 10,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 2,
    elevation: 3,
  },
  whatsappText: {
    fontSize: 16,
  },
  whatsappNumber: {
    marginLeft: 8,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  formHeading: {
    fontSize: typography.medium + 2,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border || '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
    color: colors.textPrimary,
    backgroundColor: colors.backgroundElevated || '#fff',
  },
  textarea: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  submitText: {
    color: colors.onPrimary || '#fff',
    fontWeight: '700',
  },
  contactInfo: {
    marginTop: 16,  }
});
