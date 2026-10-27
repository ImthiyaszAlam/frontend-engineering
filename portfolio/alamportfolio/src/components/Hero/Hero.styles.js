import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export const createHeroStyles = (width, height) => StyleSheet.create({
  container: {
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceLight, // fallback bg color
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: width > 600 ? 40 : 20,
  },
  leftContent: {
    alignItems: 'start',
    justifyContent: 'flex-start',
  },

  title: {
    textTransform: 'capitalize',
    marginBottom: 16,
    color: COLORS.secondary,
    fontSize: width > 600 ? 22 : 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 16,
    color: COLORS.secondary,
    fontSize: width > 600 ? 16 : 14,
    lineHeight: width > 600 ? 24 : 20,
    textAlign: 'center',
  },
});