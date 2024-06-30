import {ViewStyle} from 'react-native';

export interface ButtonProp {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
  secondary?: boolean;
  titleColor?:  string;
}
