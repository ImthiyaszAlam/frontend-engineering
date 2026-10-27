import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  icon: {
    color: '#FFD700',
    marginRight: 8,
  },
  text: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#FFD700',
  },
  underline: {
    height: 2,
    backgroundColor: '#FFD700',
    borderRadius: 1,
    alignSelf: 'flex-start',
    width: '100%',
    minWidth: 40,
    maxWidth: '100%',
  },
});
