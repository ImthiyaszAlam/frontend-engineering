import React from 'react';
import { Pressable, Text, View } from 'react-native';
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
        styles.container,
        disabled && styles.disabled,
        pressed && styles.pressed,
        hovered && styles.hovered,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.content}>
        {icon && iconPosition === 'left' && (
          <View style={styles.iconLeft}>{icon}</View>
        )}

        {title ? (
          <Text style={[styles.text, textStyle]}>
            {title}
          </Text>
        ) : null}

        {icon && iconPosition === 'right' && (
          <View style={styles.iconRight}>{icon}</View>
        )}
      </View>
    </Pressable>
  );
};

export default AppButton;