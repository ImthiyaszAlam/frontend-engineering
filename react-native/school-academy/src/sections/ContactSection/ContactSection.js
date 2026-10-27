import { View, TouchableOpacity, Alert, Linking, ImageBackground } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from './ContactSection.styles';
import ContactCard from './components/ContactCard/ContactCard';
import { schoolName } from '../../content/basicData';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import ContactSmallCard from './components/ContactSmallCard/ContactSmallCard';
import { colors } from '../../theme';

export default function ContactSection() {

  const openWhatsApp = () => {
    const phone = schoolName.mobileNumber.replace(/\D/g, '');
    const message = 'Hello, I would like to inquire about admissions.';
    const url = `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;

    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    } else {
      Linking.openURL(url).catch(() =>
        Alert.alert('Unable to open WhatsApp')
      );
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1470&auto=format&fit=crop' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} pointerEvents="none" />
      <View style={styles.contentWrapper}>
        <View style={styles.inner}>

          <View style={styles.left}>
            <SectionTopBar title='Get in Touch' align='left' />

            <View style={styles.contactInfo}>
              <ContactSmallCard
                icon={<FontAwesome name="phone" size={20} color={colors.textSecondary} />}
                text={schoolName.mobileNumber}
              />

              <ContactSmallCard
                icon={<FontAwesome name="whatsapp" size={20} color="#25D366" />}
                text={schoolName.mobileNumber}
              />

              <ContactSmallCard
                icon={<FontAwesome name="envelope" size={20} color={colors.textSecondary} />}
                text={schoolName.emailAddress}
              />
            </View>

            <TouchableOpacity style={styles.whatsappIcon} onPress={openWhatsApp}>
              <FontAwesome name="whatsapp" size={26} color="#25D366" />
            </TouchableOpacity>
          </View>

          <View style={styles.right}>
            <ContactCard  />
          </View>

        </View>
      </View>
    </ImageBackground>
  );
}