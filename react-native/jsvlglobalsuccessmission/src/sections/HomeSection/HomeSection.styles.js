import { StyleSheet, Dimensions } from 'react-native';
import { colors, spacing, typography } from '../../theme';

const { width, height } = Dimensions.get('window');

// 50% shrink factor for small devices
const isSmallDevice = width < 375;
const schoolFontSize = isSmallDevice ? 35 : 70; // 50% of 70 on small screens

export default StyleSheet.create({
  background: {
    height: height * 0.9,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.lg,
    paddingHorizontal: '5%',
  },

  centerContent: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },

  schoolName: {
    fontSize: schoolFontSize,
    fontWeight: 'bold',
    color: colors.textSecondary,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },




});