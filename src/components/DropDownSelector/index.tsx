import {View, Text} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import {DropDownSelectorProps} from './DopDownSelector';
import SDDS from './DropDownSelector.styles';
import { keywords } from '../../utils/constants/keywords';

const DropDownSelector = ({
  isFocus,
  setIsFocus,
  data,
  value,
  setValue,
  style,
  search,
  searchPlaceholder,
  placeholder,
  icon,
}: DropDownSelectorProps) => {
  return (
    <Dropdown
      style={[SDDS.dropdown, style, isFocus && {borderColor: 'blue'}]}
      placeholderStyle={SDDS.placeholderStyle}
      selectedTextStyle={SDDS.selectedTextStyle}
      inputSearchStyle={SDDS.inputSearchStyle}
      iconStyle={SDDS.iconStyle}
      data={data}
      search={search || false}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? placeholder: '...'}
      searchPlaceholder={searchPlaceholder || 'Search'}
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
      }}
      renderLeftIcon={() =>
        icon ? (
          <Icon
            style={SDDS.icon}
            color={isFocus ? 'blue' : 'black'}
            name={icon}
            size={20}
          />
        ) : null
      }
    />
  );
};

export default DropDownSelector;
