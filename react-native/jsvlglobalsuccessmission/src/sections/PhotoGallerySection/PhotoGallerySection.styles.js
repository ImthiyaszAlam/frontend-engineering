import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: '10%', // ✅ reduced for responsiveness
    paddingVertical: 24,
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  containerMobile: {
    paddingHorizontal: 16, // ✅ proper mobile spacing
  },

  galleryRow: {
    marginTop: 30,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  galleryColumn: {
    flexDirection: 'column', // ✅ stack on mobile
  },

  gallerySection: {
    flex: 1,
    height: 500, // only applies for desktop
    marginHorizontal: 6,
    justifyContent: 'space-between',
  },

  // Desktop layout
  photo40: {
    flex: 4,
    marginBottom: 12,
  },

  photo60: {
    flex: 6,
    marginBottom: 12,
  },

  photo50: {
    flex: 1,
    marginBottom: 12,
  },

  // ✅ Mobile layout (simple + safe)
  mobilePhoto: {
    height: 200,
    marginBottom: 12,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
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