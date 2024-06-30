import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {ButtonProp} from './Button';
import SButton from './Button.styles';
import { COLORS } from '../../utils/constants/color';

const Button = ({
  title,
  onPress,
  loading,
  disabled,
  secondary,
  style,
  titleColor,
}: ButtonProp) => {
  return (
    <TouchableOpacity
      style={[SButton.container, style, secondary ? SButton.inActive : null]}
      disabled={disabled ? true : false}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <Text
          style={[
            SButton.title,
            {
              color: titleColor
                ? titleColor
                : secondary
                ? COLORS.black
                : COLORS.white,
            },
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
