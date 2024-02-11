import React from 'react';
import {Pressable, Text, ActivityIndicator} from 'react-native';
import styles from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  isLoading: boolean;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  isLoading = false,
  disabled,
}) => {
  return (
    <Pressable style={disabled ? [styles.button, styles.buttonDisabled] : styles.button } onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </Pressable>
  )
}

export default Button;