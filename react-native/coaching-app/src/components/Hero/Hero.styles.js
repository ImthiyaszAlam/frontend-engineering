import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export default StyleSheet.create({
  container: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)', // dark overlay for readability
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  welcome: {
    color: COLORS.secondary,
    fontSize: 16,
    marginBottom: 8,
  },

  title: {
    color: COLORS.secondary,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitle: {
  marginBottom: 20,
  textAlign: 'center', // ✅ THIS fixes it
    color: COLORS.secondary,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },

});