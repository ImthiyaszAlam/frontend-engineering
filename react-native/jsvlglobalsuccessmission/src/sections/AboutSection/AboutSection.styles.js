import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';

const styles = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 0,
    justifyContent: 'center',
    paddingLeft: 0,
    backgroundColor: colors.background,
  },

  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  contentContainerMobile: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    width: '45%',
    overflow: 'hidden',
    backgroundColor: colors.background,
  },
imageContainerMobile: {
  width: '100%',      // full width on mobile
  marginBottom: spacing.lg,
  alignItems: 'center', // center image horizontally
},
textContainerMobile: {
  width: '100%',      // full width on mobile
  alignItems: 'center', // center text horizontally
},

  image: {
    width: '100%',
    height: layout.sectionHeight,
    borderRadius: layout.borderRadius,
  },
  imageMobile: {
    height: 180,
    borderRadius: layout.borderRadius,
  },

  textContainer: {
    width: '50%',
    justifyContent: 'center',
  },


  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: spacing.md,
    width: '100%',
  },
  infoRowMobile: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center', // vertical centering
    alignItems: 'center',     // horizontal centering
  },

  infoColumnLeft: {
    flex: 1,
    marginRight: spacing.md,
  },
  infoColumnLeftMobile: {
    width: '100%',
    marginRight: 0,
    marginBottom: spacing.md,
    alignItems: 'center',     // center cards horizontally
  },

  infoColumnRight: {
    flex: 1,
    marginLeft: spacing.md,
    justifyContent: 'center',
  },
  infoColumnRightMobile: {
    width: '100%',
    marginLeft: 0,
    alignItems: 'center',    // center paragraph horizontally
  },

  title: {
    ...typography.headingMedium,
    color: colors.textPrimary,
    marginBottom: spacing.md,
    textAlign: 'left',
  },
  titleMobile: {
    textAlign: 'center',      // center title on mobile
  },

  paragraph: {
    ...typography.body,
    color: colors.textTertiary,
    textAlign: 'justify',
  },
  paragraphMobile: {
    textAlign: 'center',      // center paragraph on mobile
  },

  actionRow: {
    flexDirection: 'row',
    marginTop: 2,
  },
  learnMoreButton: {
    marginRight: 16,
  },
});

export default styles;