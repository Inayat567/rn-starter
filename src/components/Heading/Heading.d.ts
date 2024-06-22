import {TextStyle} from 'react-native';

export interface HeadingProp {
  text: string;
  style?: TextStyle;
  onPress?: () => void;
}
