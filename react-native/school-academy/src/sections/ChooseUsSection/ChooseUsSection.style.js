import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
	sectionContainer: {
		flexDirection: 'row',
		width: '100%',
		minHeight: 600,
		backgroundColor: colors.primary,
		paddingHorizontal: '10%',
	},
	leftContainer: {
		flex: 1,
		paddingRight: 16,
		justifyContent: 'center',
	},
	rightContainer: {
		flex: 1,
		// Placeholder for image or illustration
	},
	heading: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#1976D2',
		marginBottom: 8,
	},
	paragraph: {
		fontSize: 15,
		color: '#333',
		marginBottom: 18,
	},
	cardsGrid: {
		marginTop:16,
		flexDirection: 'column',
		gap: 5,
	},
	cardsRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		gap: 0,
	},
	headingWhite: {
		color: colors.white,
	},
	subTitleWhite: {
		color: colors.white,
	},
});

export default styles;
