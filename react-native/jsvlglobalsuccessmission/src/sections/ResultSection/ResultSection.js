import React, { useEffect, useState } from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { resultSectionHeader } from '../../content/sectionheaderdata';
import styles from './ResultSection.styles';
import ResultCard from './components/ResultCard/ResultCard';
import { resultData } from '../../content/resultData';

const ResultSection = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Simulate fetch/load
        setResults(resultData);
    }, []);

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1774028156717-6b9f92babd2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay} />

            <View style={styles.container}>
                <SectionTopBar
                    title={resultSectionHeader.title}
                    heading={resultSectionHeader.heading}
                    subTitle={resultSectionHeader.subTitle}
                    align={resultSectionHeader.align}
                    headingStyle={styles.headingWhite}
                    subTitleStyle={styles.subTitleWhite}
                />

                {(() => {
                    const chunks = [];
                    for (let i = 0; i < results.length; i += 5) {
                        chunks.push(results.slice(i, i + 5));
                    }

                    return chunks.map((chunk, idx) => (
                        <View style={styles.cardsRow}>
                            {chunk.map((r) => (
                                <ResultCard
                                    key={r.id}
                                    photoUri={r.photoUri}
                                    name={r.name}
                                    stream={r.stream}
                                    percentage={r.percentage}
                                />
                            ))}
                        </View>
                    ));
                })()}
            </View>
        </ImageBackground>
    );
};

export default ResultSection;
