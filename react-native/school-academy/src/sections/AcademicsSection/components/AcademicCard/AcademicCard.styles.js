import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../../theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface || '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height:300,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 0,
    padding: spacing.md,
    marginVertical: spacing.sm,
    shadowColor: colors.shadow || '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    resizeMode: 'cover',
    marginBottom: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing.xs,
  },
  title:{
    ...typography.headingSmall,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  description: {
    ...typography.body,
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'left',
    overflow: 'hidden',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.border || '#eee',
    paddingTop: spacing.sm,
    marginTop: spacing.sm,
  },
  bottomItem: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomItemLeft: {
    justifyContent: 'flex-start',
  },
  bottomItemCenter: {
    justifyContent: 'center',
  },
  bottomItemRight: {
    justifyContent: 'flex-end',
  },
  icon: {
    marginRight: 4,
  },
  bottomText: {
    ...typography.caption,
    color: colors.textSecondary || colors.text,
  },
});

export default styles;
