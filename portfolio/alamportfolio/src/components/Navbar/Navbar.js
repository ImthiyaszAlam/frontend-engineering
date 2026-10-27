import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  useWindowDimensions,
} from 'react-native';
import styles from './Navbar.styles';
import AppButton from '../AppButton/AppButton';
import { useNavigation } from '@react-navigation/native';
import TopNavbar from '../TopNavbar/TopNavbar';

const NAV_ITEMS = ['Home', 'About', 'Projects', 'Pages', 'Contact'];
const PAGES_MENU = [
  { label: 'Teachers', route: 'Teachers' },
  { label: 'Founders', route: 'Founders' },
  { label: 'Message', route: 'Message' },
  { label: 'Events', route: 'Events' },
  { label: 'Gallery', route: 'Gallery' },
  { label: 'Testimonial', route: 'Testimonial' },
  { label: 'Our Result', route: 'Our Result' },
  { label: 'Careers', route: 'Careers' },
];

const Navbar = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [showPages, setShowPages] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pagesMenuLeft, setPagesMenuLeft] = useState(0);
  const [pagesMenuTop, setPagesMenuTop] = useState(0);
  const [pagesMenuWidth, setPagesMenuWidth] = useState(null);
  const pagesButtonRef = useRef(null);

  const closePagesMenu = () => setShowPages(false);

  const handleNavigate = (routeName) => {
    closePagesMenu();
    setIsMobileMenuOpen(false);
    navigation.navigate(routeName);
  };

  const allItems = [
    { label: 'Home', route: 'Home' },
    { label: 'About', route: 'About' },
    { label: 'Projects', route: 'Courses' },
    ...PAGES_MENU,
    { label: 'Contact', route: 'Contact' },
  ];

  const half = Math.ceil(allItems.length / 2);
  const column1 = allItems.slice(0, half);
  const column2 = allItems.slice(half);

  return (


    <View style={styles.mainContainer}>

      <TopNavbar onHamburgerPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {isMobile && isMobileMenuOpen && (
        <View style={styles.mobileMenu}>
          <View style={styles.mobileMenuRow}>
            <View style={styles.mobileMenuColumn}>
              {column1.map((item) => (
                <Pressable
                  key={item.route}
                  style={({ pressed, hovered }) => [
                    styles.mobileMenuItem,
                    pressed && styles.mobileMenuItemPressed,
                    hovered && styles.mobileMenuItemHovered,
                  ]}
                  onPress={() => handleNavigate(item.route)}
                >
                  {({ pressed, hovered }) => (
                    <Text style={[styles.mobileMenuText, pressed && styles.mobileMenuTextPressed, hovered && styles.mobileMenuTextHovered]}>{item.label}</Text>
                  )}
                </Pressable>
              ))}
            </View>
            <View style={styles.mobileMenuColumn}>
              {column2.map((item) => (
                <Pressable
                  key={item.route}
                  style={({ pressed, hovered }) => [
                    styles.mobileMenuItem,
                    pressed && styles.mobileMenuItemPressed,
                    hovered && styles.mobileMenuItemHovered,
                  ]}
                  onPress={() => handleNavigate(item.route)}
                >
                  {({ pressed, hovered }) => (
                    <Text style={[styles.mobileMenuText, pressed && styles.mobileMenuTextPressed, hovered && styles.mobileMenuTextHovered]}>{item.label}</Text>
                  )}
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      )}

      {!isMobile && (
      <View style={[styles.container, isMobile && styles.containerMobile]}>


        <View style={[styles.navLinks, isMobile && styles.navLinksMobile]}>
          {NAV_ITEMS.map((item) => (
            <Pressable
              key={item}
              style={({ pressed, hovered }) => [
                styles.link,
                pressed && styles.linkPressed,
                hovered && styles.linkHovered,
              ]}
              ref={item === 'Pages' ? pagesButtonRef : null}
              onPress={() => {
                if (item === 'Pages') {
                  if (!isMobile) {
                    pagesButtonRef.current?.measureInWindow((x, y, width, height) => {
                      setPagesMenuLeft(x);
                      setPagesMenuTop(y + height);
                      setPagesMenuWidth(width);
                      setShowPages((value) => !value);
                    });
                  }
                } else {
                  handleNavigate(item === 'Projects' ? 'Courses' : item);
                }
              }}
            >
              {({ pressed, hovered }) => (
                item === 'Pages' ? (
                  <View style={styles.linkContent}>
                    <Text style={[styles.linkText, isMobile && styles.linkTextMobile, pressed && styles.linkTextPressed, hovered && styles.linkTextHovered]}>{item}</Text>
                    <Text style={[styles.dropdownIcon, isMobile && styles.dropdownIconMobile]}>▼</Text>
                  </View>
                ) : (
                  <Text style={[styles.linkText, isMobile && styles.linkTextMobile, pressed && styles.linkTextPressed, hovered && styles.linkTextHovered]}>{item}</Text>
                )
              )}
            </Pressable>
          ))}
        </View>
   
        <Modal
          transparent
          visible={showPages}
          animationType="fade"
          onRequestClose={closePagesMenu}
        >
          <View style={styles.modalWrapper}>
            <Pressable style={styles.modalOverlay} onPress={closePagesMenu} />

            <View
              style={[
                styles.pagesDropdown,
                isMobile && styles.pagesDropdownMobile,
                {
                  left: pagesMenuLeft,
                  top: 87,
                  minWidth: 250,
                  flexDirection: 'row',
                },
              ]}
            >
              <View style={[styles.dropdownColumn, { marginRight: 20 }]}>
                {PAGES_MENU.slice(0, Math.ceil(PAGES_MENU.length / 2)).map(({ label, route }) => (
                  <Pressable
                    key={route}
                    style={({ pressed, hovered }) => [
                      styles.dropdownItem,
                      pressed && styles.dropdownItemPressed,
                      hovered && styles.dropdownItemHovered,
                    ]}
                    onPress={() => handleNavigate(route)}
                  >
                    {({ pressed, hovered }) => (
                      <Text style={[styles.dropdownText, pressed && styles.dropdownTextPressed, hovered && styles.dropdownTextHovered]}>{label}</Text>
                    )}
                  </Pressable>
                ))}
              </View>
              <View style={styles.dropdownColumn}>
                {PAGES_MENU.slice(Math.ceil(PAGES_MENU.length / 2)).map(({ label, route }) => (
                  <Pressable
                    key={route}
                    style={({ pressed, hovered }) => [
                      styles.dropdownItem,
                      pressed && styles.dropdownItemPressed,
                      hovered && styles.dropdownItemHovered,
                    ]}
                    onPress={() => handleNavigate(route)}
                  >
                    {({ pressed, hovered }) => (
                      <Text style={[styles.dropdownText, pressed && styles.dropdownTextPressed, hovered && styles.dropdownTextHovered]}>{label}</Text>
                    )}
                  </Pressable>
                ))}
              </View>
            </View>
          </View>
        </Modal>
      </View>
      )}

    </View>
  );
};

export default Navbar;