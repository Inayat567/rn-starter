import React, {Dispatch, SetStateAction} from 'react';
import {ViewStyle} from 'react-native';

export type BottomSheetsProps = {
  snapPoint: number | string;
  setSnapPoint: Dispatch<SetStateAction<number | string>>;
  bottomSheetRef: any;
  children: React.ReactNode;
  style?: ViewStyle;
};
