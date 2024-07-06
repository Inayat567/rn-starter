import {StatusBar, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/constants/color';
import SCSB from './CustomStatusBar.styles';

const CustomStatusBar = () => {
  return (
    <View style={SCSB.container}>
      <StatusBar
        backgroundColor={COLORS.white}
        animated={true}
        barStyle={'dark-content'}
      />
    </View>
  );
};

export default CustomStatusBar;
