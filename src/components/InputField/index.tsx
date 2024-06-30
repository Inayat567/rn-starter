import {View, TextInput} from 'react-native';
import React, {forwardRef} from 'react';
import {InputFieldProp} from './InputField';
import SInputField from './InputField.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {normalizeFont, normalizeHeight} from '../../utils/globalFunctions';
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
      icon,
      toggleVisible,
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
          style,
          {height: multiline ? normalizeHeight(100) : normalizeHeight(45)},
        ]}>
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
        {icon && (
          <Icon
            style={{flex: 0.1}}
            color={COLORS.black}
            name={icon}
            size={normalizeFont(20)}
            onPress={toggleVisible}
          />
        )}
      </View>
    );
  },
);

export default InputField;
