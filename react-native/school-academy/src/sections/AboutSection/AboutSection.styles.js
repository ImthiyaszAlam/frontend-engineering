
import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';

const styles = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 0,
    justifyContent:'center',
    paddingLeft: 0,
    backgroundColor: colors.background,
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 2,
  },
  learnMoreButton: {
    marginRight: 16,
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
    width: '100%',
    marginBottom: spacing.lg,
  },
  image: {
    width: '100%',
    height: layout.sectionHeight,
  },
  imageMobile: {
    height: 180,
    borderRadius: layout.borderRadius,
  },
  textContainer: {
    width: '50%',
    justifyContent: 'center',
  },
  textContainerMobile: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: spacing.md,
    width: '100%',
  },
  infoColumnLeft: {
    flex: 1,
    marginRight: spacing.md,
  },
  infoColumnRight: {
    flex: 1,
    marginLeft: spacing.md,
    justifyContent: 'center',
  },
  infoRowMobile: {
    flexDirection: 'column',
    width: '100%',
  },
  infoColumnLeftMobile: {
    width: '100%',
    marginRight: 0,
    marginBottom: spacing.md,
  },
  infoColumnRightMobile: {
    width: '100%',
    marginLeft: 0,
  },
  title: {
    ...typography.headingMedium,
    color: colors.textPrimary,
    marginBottom: spacing.md,
    textAlign: 'left',
  },
  paragraph: {
    ...typography.body,
    color: colors.textTertiary,
    textAlign: 'justify',
  },
});

export default styles;
