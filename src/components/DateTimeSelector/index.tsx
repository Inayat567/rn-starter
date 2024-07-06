import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {DateTimeSelectorProps} from './DateTimeSelector';
import SDTS from './DateTImeSelector.styles';
import {Platform, View} from 'react-native';
import {OS} from '../../utils/constants/keywords';
import {COLORS} from '../../utils/constants/color';

const DateTimeSelector = ({
  date,
  mode,
  onSelect,
  style,
  is24Hour,
  minDate,
  maxDate,
}: DateTimeSelectorProps) => {
  return (
    <View
      style={[SDTS.container, {
        backgroundColor:
          Platform.OS === OS.ios ? COLORS.grayExtraLight : COLORS.white,
      }]}>
      <DateTimePicker
        display={Platform.OS === OS.ios ? 'spinner' : 'default'}
        testID="dateTimePicker"
        style={[SDTS.container, style]}
        value={date}
        mode={mode}
        minimumDate={minDate}
        maximumDate={maxDate}
        is24Hour={is24Hour ?? true}
        onChange={e => onSelect(e.nativeEvent.timestamp)}
      />
    </View>
  );
};

export default DateTimeSelector;
