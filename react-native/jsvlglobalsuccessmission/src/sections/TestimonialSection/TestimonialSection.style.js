import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';


export default StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: layout.sectionHeight,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.85)', // darker semi-transparent black
        zIndex: 0,
    },
    contentWrapper: {
        flex: 1,
        width: '100%',
        padding: spacing.md,
        paddingHorizontal: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    headingWhite: {
        color: colors.white,
    },
    subTitleWhite: {
        color: colors.white,
    },
});