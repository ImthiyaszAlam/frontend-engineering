import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './TeacherCard.style';

const TeacherCard = ({ image, name, designation }) => {
	return (
		<View style={styles.card}>
			{image && (
				<Image source={image} style={styles.image} />
			)}
			<View style={styles.bottomSection}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.designation}>{designation}</Text>
			</View>
		</View>
	);
};

export default TeacherCard;
