
import { View, Text, Image, Pressable, Platform } from 'react-native';
import IconButton from '../util/IconButton/IconButton';
import styles from './Navbar.styles';
import { schoolName } from '../../content/basicData';

const NAV_ITEMS = [
  { label: 'Home', key: 'home' },
  { label: 'About', key: 'about' },
  { label: 'Courses', key: 'academics' },
  { label: 'Teachers', key: 'teachers' },
  { label: 'Contact', key: 'contact' },
];

const Navbar = ({ onNavPress, onApplyNow }) => {
  return (
    <View style={styles.container}>
      {/* Left: Logo */}
      <View style={styles.left}>
        <Image
          source={schoolName.logo}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="School Logo"
        />
        <Text style={styles.title}>{schoolName.title}</Text>
      </View>

      {/* Center: Navigation Items */}
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

      {/* Right: Apply Now Button */}
      <View style={styles.right}>
        <IconButton icon="send" text="Apply Now" onPress={onApplyNow} />
      </View>
    </View>
  );
};

export default Navbar;
