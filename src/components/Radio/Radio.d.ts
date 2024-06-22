import {ViewStyle} from 'react-native';

export interface RadioProp {
  title: string;
  selected: boolean;
  onPress: () => void;
}
