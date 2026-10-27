
import { View } from 'react-native';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionHeading from '../SectionHeading/SectionHeading';
import SectionSubTitle from '../SectionSubTitle/SectionSubTitle';
import { styles } from './SectionTopBar.styles';



const SectionTopBar = ({ title, heading, subTitle, align = 'center' ,titleStyle,headingStyle,subTitleStyle}) => {
  return (
    <View style={align === 'center' ? styles.centerContainer : styles.leftContainer}>
      {title ? <SectionTitle title={title} align={align} style={titleStyle} /> : null}
      {heading ? <SectionHeading heading={heading} align={align} style={headingStyle} /> : null}
      {subTitle ? <SectionSubTitle subtitle={subTitle} align={align} style={subTitleStyle} /> : null}
    </View>
  );
};

export default SectionTopBar;
