import React, { useRef } from 'react';
import { View, Animated, FlatList, Dimensions, TouchableOpacity, useWindowDimensions } from 'react-native';
import TestimonialItem from './TestimonialItem';
import founders from '../../content/foundersData';
import styles from './FoundersSection.styles';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { foundersSectionHeader } from '../../content/sectionheaderdata';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const FoundersSection = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatRef = useRef(null);
    const { width: windowWidth } = useWindowDimensions();
    const itemWidth = Math.round(windowWidth * 0.8); // leave 10% padding each side

    const renderItem = ({ item }) => <TestimonialItem item={item} width={itemWidth} />;

    const onDotPress = (index) => {
        flatRef.current?.scrollToOffset({ offset: index * itemWidth, animated: true });
    };

    const position = Animated.divide(scrollX, itemWidth);

    return (
        <View style={styles.container}>
            <SectionTopBar
                title={foundersSectionHeader.title}
                heading={foundersSectionHeader.heading}
                subTitle={foundersSectionHeader.subTitle}
                align={foundersSectionHeader.align}
                headingStyle={styles.headingWhite}
                subTitleStyle={styles.subTitleWhite}
            />
            <AnimatedFlatList
                ref={flatRef}
                data={founders}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                decelerationRate={'fast'}
                snapToInterval={itemWidth}
                snapToAlignment={'start'}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
                renderItem={renderItem}
                getItemLayout={(_, index) => ({ length: itemWidth, offset: itemWidth * index, index })}
                removeClippedSubviews
            />

            <View style={styles.pagination}>
                {founders.map((_, i) => {
                    const inputRange = [i - 1, i, i + 1];
                    const scale = position.interpolate({
                        inputRange,
                        outputRange: [1, 1.8, 1],
                        extrapolate: 'clamp',
                    });
                    const opacity = position.interpolate({
                        inputRange,
                        outputRange: [0.6, 1, 0.6],
                        extrapolate: 'clamp',
                    });

                    return (
                        <TouchableOpacity key={String(i)} onPress={() => onDotPress(i)} accessible accessibilityLabel={`Go to slide ${i + 1}`}>
                            <Animated.View
                                style={[
                                    styles.dot,
                                    { transform: [{ scale }], opacity },
                                    i === 0 ? styles.dotActive : null,
                                ]}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

export default FoundersSection;
