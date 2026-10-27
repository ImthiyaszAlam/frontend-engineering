import { StyleSheet } from 'react-native';
import { layout } from '../../theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: layout.horizontalPaddingPercent,
    paddingVertical: layout.sectionPaddingVertical,
    minHeight: layout.sectionHeight,
  },
});