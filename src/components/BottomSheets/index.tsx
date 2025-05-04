import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import SBS from './BottomSheets.styles';
import {BottomSheetsProps} from './BottomSheets';

const BottomSheets = ({
  snapPoint,
  setSnapPoint,
  bottomSheetRef,
  children,
  style,
}: BottomSheetsProps) => {
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    setSnapPoint(1);
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  // renders
  return (
    <BottomSheet
      snapPoints={[1, snapPoint]}
      style={[SBS.container, style]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      handleHeight={20}>
      <BottomSheetView style={SBS.contentContainer}>{children}</BottomSheetView>
    </BottomSheet>
  );
};

export default BottomSheets;
