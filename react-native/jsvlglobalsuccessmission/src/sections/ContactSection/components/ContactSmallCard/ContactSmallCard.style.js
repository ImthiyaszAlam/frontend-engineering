import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../../theme';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: spacing.md,
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    marginBottom: spacing.sm,
    shadowColor: '#000',
    shadowOpacity: 0.1,
        borderWidth: 1,                 // 🔥 border added
    borderColor: 'rgba(255,255,255,0.3)', // subtle white border (works on dark bg)
 
    shadowRadius: 6,
    elevation: 3,
  },

  iconContainer: {
    marginRight: spacing.md,
  },

  text: {
    ...typography.body,
    color: colors.white,
    flex: 1,
  },
});