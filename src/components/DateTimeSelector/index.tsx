import {View, Text} from 'react-native';
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {DateTimeSelectorProps} from './DateTimeSelector';

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
    <DateTimePicker
      testID="dateTimePicker"
      style={style}
      value={date}
      mode={mode}
      minimumDate={minDate}
      maximumDate={maxDate}
      is24Hour={is24Hour ?? true}
      onChange={onSelect}
    />
  );
};

export default DateTimeSelector;
