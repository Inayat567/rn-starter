import {View} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {CheckBoxProp} from './CheckBox';
import {COLORS} from '../../utils/constants/color';
import SCheckBox from './CheckBox.styles';

const CheckBox = ({title, onPress, textStyle, borderColor}: CheckBoxProp) => {
  return (
    <View style={SCheckBox.container}>
      <BouncyCheckbox
        testID="bouncyCheckBox"
        size={25}
        fillColor={COLORS.warning}
        unFillColor={COLORS.white}
        text={title}
        iconStyle={[SCheckBox.icon, {borderColor: borderColor || COLORS.black}]}
        innerIconStyle={[SCheckBox.icon, {borderWidth: 2}]}
        textStyle={[SCheckBox.title, textStyle]}
        onPress={onPress}
      />
    </View>
  );
};

export default CheckBox;
