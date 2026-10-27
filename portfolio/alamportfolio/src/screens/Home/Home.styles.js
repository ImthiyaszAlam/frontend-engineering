import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary, // main page bg (white)
  },

  content: {
    flexGrow: 1,
    paddingBottom: 40, // space before footer
  },
});