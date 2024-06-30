import {Dimensions, StyleSheet} from 'react-native';
import {normalizeHeight, normalizeWidth} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const {width, height} = Dimensions.get('window');

const SInputField = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: normalizeWidth(width * 0.9),
    height: normalizeHeight(45),
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginVertical: normalizeHeight(5),
    paddingHorizontal: normalizeWidth(10),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    color: COLORS.black,
  },
});

export default SInputField;
