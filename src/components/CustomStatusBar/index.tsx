import {StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/constants/color';

const CustomStatusBar = () => {
  return (
    <StatusBar
      backgroundColor={COLORS.white}
      animated={true}
      barStyle={'dark-content'}
    />
  );
};

export default CustomStatusBar;
