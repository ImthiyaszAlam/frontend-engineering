
import { View } from 'react-native';
import styles from './ChooseUsSection.style';
import ChooseUsCard from './components/ChooseUsCard/ChooseUsCard';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { chooseUsSectionHeader } from '../../content/sectionheaderdata';
import { chooseUsData } from '../../content/chooseUsData';

const ChooseUsSection = () => {
	return (
		<View style={styles.sectionContainer}>
			{/* Left Side */}
			<View style={styles.leftContainer}>

				<SectionTopBar
					title={chooseUsSectionHeader.title}
					heading={chooseUsSectionHeader.heading}
					subTitle={chooseUsSectionHeader.subTitle}
					align={chooseUsSectionHeader.align}
					headingStyle={styles.headingWhite}
					subTitleStyle={styles.subTitleWhite}
				/>
				
				<View style={styles.cardsGrid}>
					<View style={styles.cardsRow}>
						{chooseUsData.slice(0, 2).map((item, idx) => (
							<ChooseUsCard
								key={idx}
								icon={item.icon}
								title={item.title}
								subtitle={item.subtitle}
							/>
						))}
					</View>
					<View style={styles.cardsRow}>
						{chooseUsData.slice(2, 4).map((item, idx) => (
							<ChooseUsCard
								key={idx + 2}
								icon={item.icon}
								title={item.title}
								subtitle={item.subtitle}
							/>
						))}
					</View>
				</View>
				
			</View>
			{/* Right Side (empty for now, can add image or illustration) */}
			<View style={styles.rightContainer} />
		</View>
	);
};


export default ChooseUsSection;
