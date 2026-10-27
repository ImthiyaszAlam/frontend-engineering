import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 20,
    minHeight: 360,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  left: {
    flex: 2,
    paddingRight: 12,
  },
  right: {
    flex: 1,
    alignItems: 'center',
  },
  quote: {
    fontSize: 16,
    color:'white',
    textAlign: 'justify',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    marginBottom: 12,
    backgroundColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
  role: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
  },
});
