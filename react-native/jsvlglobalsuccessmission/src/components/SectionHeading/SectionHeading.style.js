import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLeft: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  text: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    letterSpacing: 1,
    lineHeight: 30,
    textAlign: 'center',
    color: '#000000',
  },

  textLeft: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    letterSpacing: 1,
    lineHeight: 30,
    textAlign: 'left',
    alignSelf: 'flex-start',
    color: '#000000',
  },
});
