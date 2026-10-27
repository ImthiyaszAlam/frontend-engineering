import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';

export default StyleSheet.create({
  container: {
    height: layout.sectionHeight,
    backgroundColor: colors.missionBg,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.large,
  },
  title: {
    ...typography.headingLarge,
    color: colors.text,
    textAlign: 'center',
  },
});
