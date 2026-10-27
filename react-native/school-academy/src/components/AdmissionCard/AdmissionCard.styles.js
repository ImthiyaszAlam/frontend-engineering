import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
export default StyleSheet.create({

card: {
  padding: 16,
  borderRadius: 16,
  borderBottomLeftRadius: 0,

  backgroundColor: 'transparent', // ✅ fully transparent
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.2)', // keep subtle border (optional)

  shadowOpacity: 0.1,
  shadowRadius: 30,
  elevation: 5,

  width: '100%',
  maxWidth: 500,
  alignSelf: 'center',
},

discountBadge: {
  position: 'absolute',
  top: -10,
  right: -10,
  backgroundColor: '#ff3b30', // strong red
  paddingVertical: 6,
  paddingHorizontal: 12,
  borderRadius: 20,
  borderWidth: 2,
  borderColor: '#fff',
},

discountText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 12,
},

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff', // important for glass
  },
  admissionText: {
    color: colors.textSecondary, // accent color for "Admissions Open"
  },

  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 16,
  },

  infoBox: {
    marginBottom: 20,
  },

  infoText: {
    fontSize: 14,
    marginBottom: 6,
    color: 'rgba(255,255,255,0.9)',
  },
  // 🔥 Button styles
  applyBtn: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    paddingVertical: 12,
    borderRadius: 50,
    borderBottomLeftRadius:0,
    alignItems: 'center',
  },

  applyBtnPressed: {
    opacity: 0.7,
  },

  applyBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});