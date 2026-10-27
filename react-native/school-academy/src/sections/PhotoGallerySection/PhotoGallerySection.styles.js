import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: '15%',
    paddingVertical: 24,
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  galleryRow: {
    marginTop: 30,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  gallerySection: {
    flex: 1,
    height: 500,                 // ✅ required for flex ratios
    marginHorizontal: 6,
    justifyContent: 'space-between', // ✅ spacing without breaking flex
  },

  // 🔥 Wrapper (controls height via flex)
  photo40: {
    marginBottom: 12,
    flex: 4,
  },

  photo60: {
    marginBottom: 12,
    flex: 6,
  },

  photo50: {
    marginBottom: 12,
    flex: 1,
  },

  // 🔥 Actual Image (fills wrapper)
  image: {
    width: '100%',
    height: '100%',
    marginBottom: 12,
    borderRadius: 24,
    borderBottomLeftRadius: 0,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },

  emptyText: {
    color: '#888',
    fontStyle: 'italic',
    padding: 20,
    textAlign: 'center',
  },
});