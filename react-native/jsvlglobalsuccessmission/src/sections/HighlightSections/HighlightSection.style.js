import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: spacing.lg,
    backgroundColor: colors.background,
  },
  imageBackground: {
    width: '100%',
  },
  sectionInner: {
    minHeight: 0,
    paddingVertical: spacing.lg,
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
    flexDirection: 'row',
    flexWrap: 'wrap', // allow wrapping for mobile
    marginTop: spacing.lg,
    width: '100%',
    gap: spacing.md,
    justifyContent: 'center',
  },
  highlightCardWrapper: {
    flex: 1,
    marginBottom: spacing.lg,
    minWidth: 200, // ensures cards don’t shrink too much
    maxWidth: 300, // optional max-width for large screens
  },
  highlightCardWrapperMobile: {
    flex: 1,
    width: '100%', // full width on mobile
    marginBottom: spacing.md,
  },
});

export default styles;