import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: '10%',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#222',
  },
  cardsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
});
