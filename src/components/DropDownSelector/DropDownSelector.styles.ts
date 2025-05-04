import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/color';

const SDDS = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: COLORS.gray,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default SDDS;
