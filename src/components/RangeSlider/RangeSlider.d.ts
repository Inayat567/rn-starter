import {ViewStyle} from 'react-native';

export interface RangeSliderProp {
  value: number;
  onChange: (range: number) => void;
}
