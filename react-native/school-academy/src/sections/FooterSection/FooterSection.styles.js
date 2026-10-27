import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: '10%',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.06)',
  },
  columns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  col: {
    flex: 1,
    paddingRight: 12,
  },
  heading: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  text: {
    color: colors.textSecondary,
    fontSize: 13,
    marginBottom: 4,
  },
  link: {
    color: colors.white,
    fontSize: 13,
    marginBottom: 6,
  },
  bottomRow: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    paddingTop: 10,
    alignItems: 'center',
  },
  bottomText: {
    color: colors.textSecondary,
    fontSize: 12,
  },
});
