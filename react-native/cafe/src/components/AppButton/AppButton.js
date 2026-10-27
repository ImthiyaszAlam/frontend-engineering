import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './AppButton.style';

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
    <TouchableOpacity
      style={[
        styles.container,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
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
    </TouchableOpacity>
  );
};

export default AppButton;