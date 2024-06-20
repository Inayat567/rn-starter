import {ViewStyle} from 'react-native';

export interface InputFieldProp {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  style?: ViewStyle;
  disabled?: boolean;
  password?: boolean;
  multiline?: boolean;
  icon?: string;
  iconColor?: string;
  iconSize?: number;
  onPress?: () => void;
}
