import {View, TextInput} from 'react-native';
import React, {forwardRef} from 'react';
import {InputFieldProp} from './InputField';
import SInputField from './InputField.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {f, h} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const InputField = forwardRef(
  (
    {
      value,
      onChangeText,
      placeholder,
      secureTextEntry,
      disable,
      keyboardType,
      multiline,
      onFocus,
      onBlur,
      leftIcon,
      rightIcon,
      onIconPress,
      containerStyle,
      style,
      autoComplete,
      autoCapatalize,
      returnKeyType,
    }: InputFieldProp,
    ref: React.Ref<TextInput>,
  ) => {
    return (
      <View
        style={[
          SInputField.container,
          {height: multiline ? h(100) : h(50)},
          containerStyle,
        ]}>
        {leftIcon && (
          <Icon
            style={{flex: 0.1}}
            color={COLORS.black}
            name={leftIcon}
            size={f(20)}
            onPress={onIconPress}
          />
        )}
        <TextInput
          ref={ref}
          style={[SInputField.input, style]}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          keyboardType={keyboardType || 'default'}
          secureTextEntry={secureTextEntry || false}
          editable={disable}
          autoComplete={autoComplete || 'off'}
          autoCapitalize={autoCapatalize || 'none'}
          multiline={multiline || false}
          returnKeyType={returnKeyType || 'next'}
        />
        {rightIcon && (
          <Icon
            style={{flex: 0.1}}
            color={COLORS.black}
            name={rightIcon}
            size={f(20)}
            onPress={onIconPress}
          />
        )}
      </View>
    );
  },
);

export default InputField;
