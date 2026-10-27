
import { View, Text, Image, Pressable, useWindowDimensions } from 'react-native';
import getStyles from './Footer.styles';
import { basicdata } from '../../content/basicdata';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const styles = getStyles(width);


  return (


    <View style={styles.mainContainer}>


      <View style={styles.container}>

        {/* LEFT SECTION */}
        <View style={styles.left}>
          <Image source={basicdata.logo} style={styles.logo} />

          <Text style={styles.schoolName}>
            {basicdata.schoolName}
          </Text>

          <Text style={styles.address}>
            {basicdata.address}
          </Text>
        </View>

        {/* RIGHT SECTION */}
        <View style={styles.right}>

          {/* COLUMN 1 - Quick Links */}
          <View style={styles.column}>
            <Text style={styles.heading}>Quick Links</Text>


            {[
              { label: 'Home', route: 'Home' },
              { label: 'About', route: 'About' },
              { label: 'Projects', route: 'Courses' },
              { label: 'Gallery', route: 'Gallery' },
              { label: 'Contact', route: 'Contact' },
            ].map((item) => (
              <Pressable
                key={item.route}
                onPress={() => navigation.navigate(item.route)}
              >
                {({ pressed, hovered }) => (
                  <Text style={[styles.link, pressed && styles.linkPressed, hovered && styles.linkHovered]}>{item.label}</Text>
                )}
              </Pressable>
            ))}

          </View>

          {/* COLUMN 2 - Projects */}
          <View style={styles.column}>
            <Text style={styles.heading}>Projects</Text>

            {[
              'Nursery',
              'Class 1–5',
              'Class 6–8',
              'Class 11–12',
              'NEET / JEE',
            ].map((item) => (
              <Text key={item} style={styles.link}>{item}</Text>
            ))}
          </View>

          {/* COLUMN 3 - Contact */}
          <View style={styles.column}>
            <Text style={styles.heading}>Contact</Text>

            {basicdata.phones.map((phone, i) => (
              <Text key={i} style={styles.link}>📞 {phone}</Text>
            ))}

            <Text style={styles.link}>✉️ {basicdata.email}</Text>
          </View>

        </View>

      </View>

      <View style={styles.bottomBar}>
        <Text style={styles.bottomText}>
          © 2026 {basicdata.schoolName}. All rights reserved.
        </Text>
      </View>

    </View>


  );
};

export default Footer;