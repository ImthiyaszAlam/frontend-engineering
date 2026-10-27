import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './AppButton.styles';

const AppButton = ({
  title,
  onPress,
  icon,
  iconPosition = 'left',
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <Pressable
      style={({ pressed, hovered }) => [
        styles.wrapper,
        pressed && styles.pressed,
        hovered && styles.hovered,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <LinearGradient
        colors={['#00F5FF', '#FF00FF']} // neon gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.container, style]}
      >
        <View style={styles.content}>
          {icon && iconPosition === 'left' && (
            <View style={styles.iconLeft}>{icon}</View>
          )}

          {title && (
            <Text style={[styles.text, textStyle]}>
              {title}
            </Text>
          )}

          {icon && iconPosition === 'right' && (
            <View style={styles.iconRight}>{icon}</View>
          )}
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default AppButton;