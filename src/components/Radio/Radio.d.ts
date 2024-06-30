import {Dispatch, SetStateAction} from 'react';
import {ViewStyle} from 'react-native';

export type ItemProp = {
  id: number;
  selected: boolean;
  label: string;
};

export interface RadioProp {
  data: ItemProp[];
  selectOption: Dispatch<SetStateAction<T>>;
  selectedOption: T;
}
