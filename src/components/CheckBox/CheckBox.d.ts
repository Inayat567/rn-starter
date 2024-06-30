import {TextStyle, ViewStyle} from 'react-native';

export interface CheckBoxProp {
  title: string;
  onPress: (checked: boolean) => void;
  textStyle?: TextStyle;
  borderColor?: string;
}
