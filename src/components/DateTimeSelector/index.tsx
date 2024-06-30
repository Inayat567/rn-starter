import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {DateTimeSelectorProps} from './DateTimeSelector';
import SDTS from './DateTImeSelector.styles';

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
      style={[SDTS.container, style]}
      value={date}
      mode={mode}
      minimumDate={minDate}
      maximumDate={maxDate}
      is24Hour={is24Hour ?? true}
      onChange={e => onSelect(e.nativeEvent.timestamp)}
    />
  );
};

export default DateTimeSelector;
