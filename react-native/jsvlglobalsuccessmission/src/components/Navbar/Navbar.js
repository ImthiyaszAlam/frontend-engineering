import { useState } from 'react';
import { View, Text, Image, Pressable, Platform, Modal, ScrollView } from 'react-native';
import IconButton from '../util/IconButton/IconButton';
import styles from './Navbar.styles';
import { schoolName } from '../../content/basicData';
import { useWindowDimensions } from 'react-native';

const NAV_ITEMS = [
  { label: 'Home', key: 'home' },
  { label: 'About', key: 'about' },
  { label: 'Courses', key: 'academics' },
  { label: 'Teachers', key: 'teachers' },
  { label: 'Contact', key: 'contact' },
];

const Navbar = ({ onNavPress, onApplyNow }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.container}>
      {/* Left: Logo + Title */}
      <View style={styles.left}>
        <Image
          source={schoolName.logo}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="School Logo"
        />
        <Text style={styles.title}>{schoolName.title}</Text>
      </View>

      {/* Center: Navigation Items (desktop) */}
      {!isMobile && (
        <View style={styles.center}>
          {NAV_ITEMS.map((item) => (
            <Pressable
              key={item.key}
              style={({ hovered }) => [styles.navItem, hovered && styles.navItemHovered]}
              android_ripple={Platform.OS === 'android' ? { color: 'transparent' } : undefined}
              accessibilityRole="link"
              accessibilityLabel={item.label}
              onPress={() => onNavPress && onNavPress(item.key)}
            >
              <Text style={styles.navItemText}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      )}

      {/* Right: Apply Button + Hamburger (mobile) */}
      <View style={styles.right}>
        {isMobile ? (
          <Pressable onPress={() => setMenuOpen(true)}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>☰</Text>
          </Pressable>
        ) : (
          <IconButton icon="send" text="Apply Now" onPress={onApplyNow} />
        )}
      </View>

      {/* Mobile Menu Modal */}
      {isMobile && (
        <Modal visible={menuOpen} animationType="slide" transparent={true}>
          <View style={styles.mobileMenuOverlay}>
            <ScrollView contentContainerStyle={styles.mobileMenu}>
              {NAV_ITEMS.map((item) => (
                <Pressable
                  key={item.key}
                  style={styles.mobileNavItem}
                  onPress={() => {
                    setMenuOpen(false);
                    onNavPress && onNavPress(item.key);
                  }}
                >
                  <Text style={styles.mobileNavItemText}>{item.label}</Text>
                </Pressable>
              ))}
              <IconButton
                icon="send"
                text="Apply Now"
                onPress={() => {
                  setMenuOpen(false);
                  onApplyNow && onApplyNow();
                }}
              />
              <Pressable onPress={() => setMenuOpen(false)} style={styles.closeMenuButton}>
                <Text style={styles.closeMenuText}>Close ✕</Text>
              </Pressable>
            </ScrollView>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Navbar;