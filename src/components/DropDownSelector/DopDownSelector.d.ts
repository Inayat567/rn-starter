import {Dispatch, SetStateAction} from 'react';
import {ViewStyle} from 'react-native';
import {ValueType} from 'react-native-dropdown-picker';

export interface DropDownSelectorProps {
  open: boolean;
  value: ValueType;
  items: ItemType<ValueType>[];
  setOpen: Dispatch<SetStateAction<boolean>>;
  setValue: Dispatch<SetStateAction<ValueType>>;
  setItems: Dispatch<SetStateAction<ItemType<ValueType>[]>>;
  style?: ViewStyle;
  multiple?: true;
  min?: number;
  max?: number;
  maxHeight?: number
}
