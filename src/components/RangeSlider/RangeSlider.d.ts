import {ViewStyle} from 'react-native';

export interface RangeSliderProp {
  title: string;
  value: number;
  onChange: (range: number) => void;
}
