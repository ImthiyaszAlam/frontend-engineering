import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary || '#007bff',
    paddingVertical: spacing.md || 12,
    paddingHorizontal: spacing.lg || 24,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...typography.button,
    color: colors.buttonText || '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
