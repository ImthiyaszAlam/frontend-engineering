import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../../theme';

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.surface || '#fff',
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		borderBottomRightRadius: 16,
		borderBottomLeftRadius: 0,
		padding: spacing.md,
		shadowColor: colors.shadow || '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 200,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		borderBottomRightRadius: 16,
		borderBottomLeftRadius: 0,
		resizeMode: 'cover',
		marginBottom: spacing.sm,
	},
	bottomSection: {
		alignItems: 'flex-start',
		paddingTop: 0,
	},
	name: {
		...typography.headingSmall,
		color: colors.textPrimary,
		textAlign: 'left',
	},
	designation: {
		...typography.body,
		color: colors.textSecondary,
		textAlign: 'left',
	},
});

export default styles;
