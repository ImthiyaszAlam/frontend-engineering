import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: colors.aboutbg,
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
    shadowColor: colors.shadow || '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: layout.borderRadius,
    overflow: 'hidden',
    backgroundColor: colors.background,
  },
  imageContainerMobile: {
    width: '100%',
    marginBottom: spacing.lg,
  },
  image: {
    width: '100%',
    height: 260,
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
  textContainerMobile: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    ...typography.headingLarge,
    color: colors.textPrimary,
    marginBottom: spacing.md,
    textAlign: 'left',
  },
  paragraph: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'left',
  },
});

export default styles;
