import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import {DropDownSelectorProps} from './DopDownSelector';

const DropDownSelector = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  style,
  multiple,
  min,
  max,
  maxHeight
}: DropDownSelectorProps) => {
  return (
    <DropDownPicker
      style={style}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      multiple={multiple ?? false}
      maxHeight={maxHeight ?? 200}
      min={min}
      max={max}
    />
  );
};

export default DropDownSelector;
