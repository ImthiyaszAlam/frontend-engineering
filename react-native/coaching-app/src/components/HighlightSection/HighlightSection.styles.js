import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { DIMENS } from '../../theme/dimens';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.background,
    },
    imageBackground: {
        width: '100%',
    },
    sectionInner: {
        minHeight: 0,
        paddingVertical: DIMENS.paddingLg,
    },
    contentLayer: {
        width: '100%',
        position: 'relative',
    },
    overlay: {

        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.85)',
    },
    highlightGrid: {
        paddingVertical: DIMENS.paddingMd,
        paddingHorizontal: DIMENS.sectionPaddingHorizontal,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    highlightCardWrapper: {
        marginBottom: DIMENS.paddingMd,
    },
    highlightCardWrapperMobile: {
        flex: 1,
        width: '100%',
    },
});

export default styles;