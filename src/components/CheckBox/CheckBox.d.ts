import {ViewStyle} from 'react-native';

export interface CheckBoxProp {
  title: string;
  checked: boolean;
  onPress: (checked: boolean) => void;
}
