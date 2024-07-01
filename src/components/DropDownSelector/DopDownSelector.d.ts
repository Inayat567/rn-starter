import {Dispatch, SetStateAction} from 'react';
import {ViewStyle} from 'react-native';
import {ValueType} from 'react-native-dropdown-picker';

export interface DropDownSelectorProps {
  isFocus: boolean;
  setIsFocus: Dispatch<SetStateAction<boolean>>;
  data: any[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  style?: ViewStyle;
  placeholder?: string;
  search?: boolean;
  searchPlaceholder?: string;
  icon?: string;
}
