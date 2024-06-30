import {StyleSheet} from 'react-native';
import {normalizeHeight, normalizeWidth} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const SRadio = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalizeWidth(15)
  },
  circle: {
    width: normalizeWidth(18),
    height: normalizeHeight(18),
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: COLORS.black,
  },
});

export default SRadio;
