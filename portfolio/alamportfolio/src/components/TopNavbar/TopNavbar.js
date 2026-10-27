import React, { useRef, useState } from 'react';
import { View, Text, useWindowDimensions, Pressable, Modal } from 'react-native';
import styles from './TopNavbar.styles';
import { Image } from 'react-native';
import AppButton from '../AppButton/AppButton';
import { basicdata } from '../../content/basicdata';

import { useNavigation } from '@react-navigation/native';

const NAV_ITEMS = ['Home', 'About', 'Projects', 'Contact'];
const PAGES_MENU = [
  { label: 'Teachers', route: 'Teachers' },
  { label: 'Founders', route: 'Founders' },
  // { label: 'Message', route: 'Message' },
  // { label: 'Events', route: 'Events' },
  // { label: 'Gallery', route: 'Gallery' },
  // { label: 'Testimonial', route: 'Testimonial' },
  // { label: 'Our Result', route: 'Our Result' },
  // { label: 'Careers', route: 'Careers' },
];

const TopNavbar = ({ onHamburgerPress }) => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [showPages, setShowPages] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pagesMenuLeft, setPagesMenuLeft] = useState(0);
  const [pagesMenuTop, setPagesMenuTop] = useState(0);
  const pagesButtonRef = useRef(null);


  const closePagesMenu = () => setShowPages(false);

  const handleNavigate = (routeName) => {
    closePagesMenu();
    navigation.navigate(routeName);
  };

  const allItems = [
    { label: 'Home', route: 'Home' },
    { label: 'About', route: 'About' },
    { label: 'Projects', route: 'Courses' },
    ...PAGES_MENU,
    { label: 'Contact', route: 'Contact' },
  ];

  const half = Math.ceil(allItems.length);
  const column1 = allItems.slice(0, half);
  const column2 = allItems.slice(half);


  return (
    <View>
      <View style={[styles.container, isMobile && styles.containerMobile]}>

        {/* LEFT SECTION */}
        <View style={[styles.left, isMobile && styles.leftMobile]}>

          {/* Logo Image */}
          <Image
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww',
            }}
            style={[styles.logoImage, isMobile && styles.logoImageMobile]}
            resizeMode="contain"
          />

          {/* Text */}
          <View>
            <Text style={[styles.logo, isMobile && styles.logoMobile]}> {basicdata.schoolName} </Text>
        
          </View>

        </View>

        {/* CENTER SECTION - NAV ITEMS */}
        {!isMobile && (
          <View style={styles.center}>
            <View style={styles.navLinks}>
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
          </View>
        )}

        {/* RIGHT SECTION */}
        {isMobile ? (
          <Pressable
            style={({ pressed, hovered }) => [
              styles.hamburger,
              pressed && styles.hamburgerPressed,
              hovered && styles.hamburgerHovered,
            ]}
            onPress={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (onHamburgerPress) onHamburgerPress();
            }}
          >
            {({ pressed, hovered }) => (
              <Text style={[styles.hamburgerText, pressed && styles.hamburgerTextPressed, hovered && styles.hamburgerTextHovered]}>☰</Text>
            )}
          </Pressable>
        ) : (
          <View style={styles.right}>
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
                      top: pagesMenuTop,
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

            <AppButton title="Apply Now" onPress={() => handleNavigate('Apply')} />
          </View>
        )}

      </View>

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
                  onPress={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigate(item.route);
                  }}
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
                  onPress={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigate(item.route);
                  }}
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
    </View>
  );
};

export default TopNavbar;