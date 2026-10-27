import { StyleSheet } from 'react-native';
import { colors,layout,spacing } from '../../theme';

export default StyleSheet.create({
  container: {
    minHeight: layout.sectionHeight,
    paddingHorizontal: '10%',
    paddingVertical: spacing.lg,
  },
  cardsRow: {
    flexDirection: 'row',
  justifyContent: 'space-between', // ✅ spread evenly
  },
  rowSpacing: {
    marginTop: 0,
  },
backgroundImage: {
  width: '100%',
  minHeight: layout.sectionHeight, // or use '100vh' (web) / flex:1
},
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.85)', 
  },
    headingWhite: {
    color: colors.white,
  },
  subTitleWhite: {
    color: colors.white,
  },
  
});
