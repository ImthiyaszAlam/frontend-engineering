
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './TestimonialCard.styles';

const STAR = '★';

const TestimonialCard = ({
	rating = 5,
	text,
	image,
	name,
	role,
}) => {
	return (
		<View style={styles.card}>
			<View style={styles.ratingRow}>
				{Array.from({ length: 5 }).map((_, i) => (
					<Text key={i} style={styles.star}>
						{STAR}
					</Text>
				))}
			</View>
			<Text style={styles.paragraph}>{text}</Text>
			<View style={styles.bottomRow}>
				<Image source={image} style={styles.avatar} />
				<View style={styles.info}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.role}>{role}</Text>
				</View>
			</View>
		</View>
	);
};

export default TestimonialCard;
