import AboutInfoCard from './components/AboutInfoCard/AboutInfoCard';
import { FontAwesome5 } from '@expo/vector-icons';
import Button from '../../components/util/AppButton';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import styles from './AboutSection.styles';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { aboutSectionHeader } from '../../content/sectionheaderdata';



const ABOUT_IMAGE = require('../../../assets/teachersgroupphoto.jpeg'); 

const AboutSection = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <SectionWrapper style={styles.sectionContainer}>
      <View style={[styles.contentContainer, isMobile && styles.contentContainerMobile]}>
        <View style={[styles.imageContainer, isMobile && styles.imageContainerMobile]}>
          <Image
            source={ABOUT_IMAGE}
            style={[styles.image, isMobile && styles.imageMobile]}
            resizeMode="cover"
            accessible
            accessibilityLabel="About our school"
          />
        </View>
        <View style={[styles.textContainer, isMobile && styles.textContainerMobile]}>
          <SectionTopBar
            title={aboutSectionHeader.title}
            heading={aboutSectionHeader.heading}
            subTitle={aboutSectionHeader.subTitle}
            align={isMobile ? 'center' : 'left'}
          />

          {/* Center the info cards and text on mobile */}
          <View style={[styles.infoRow, isMobile && styles.infoRowMobile]}>
            <View style={[styles.infoColumnLeft, isMobile && styles.infoColumnLeftMobile]}>
              <AboutInfoCard
                icon="school"
                title="Our Mission"
                subtitle="Empowering students for a brighter future"
              />

              <AboutInfoCard
                icon="user-graduate"
                title="Academic Excellence"
                subtitle="Dedicated to holistic education and personal growth"
              />
            </View>
            <View style={[styles.infoColumnRight, isMobile && styles.infoColumnRightMobile]}>
              <Text style={styles.paragraph}>
                Our school provides a supportive environment where every student can thrive academically and grow with confidence. We emphasize meaningful learning built on strong foundations. Through a well-rounded approach, we nurture curiosity, strengthen core skills, and encourage critical thinking and communication.
              </Text>
            </View>
          </View>


        </View>
      </View>
    </SectionWrapper>
  );
};

export default AboutSection;
