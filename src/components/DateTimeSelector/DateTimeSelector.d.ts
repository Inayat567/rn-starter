import {ViewStyle} from 'react-native';

export interface DateTimeSelectorProps {
  date: Date;
  mode: 'date' | 'time';
  onSelect: (e) => void;
  style?: ViewStyle;
  is24Hour?: boolean;
  minDate?: Date;
  maxDate?: Date;
}
