import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    height: height - 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(18, 17, 17, 0.85)',
    width: '100%',
    // backgroundColor: 'rgba(0,0,0,0.85)', // darker semi-transparent black
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: spacing.large,
    paddingHorizontal: '10%',
  },
  heading: {
    ...typography.headingLarge,
    color: '#fff',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: spacing.md,
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  subheading: {
    ...typography.headingMedium,
    color: '#fff',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: spacing.sm,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  schoolName: {
    ...typography.headingMedium,
    color: colors.textSecondary,
  },

  paragraph: {
    ...typography.body,
    color: '#fff',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: spacing.lg,
    maxWidth: 400,
    opacity: 0.95,
  },


  centerContent: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  schoolName: {
    fontSize: 70,
    fontWeight: 'bold',
    color: colors.textSecondary,
    marginBottom: 50,
  }
});
