import {StyleSheet} from 'react-native';
import {h, w} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const SRadio = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: w(15),
  },
  circle: {
    width: w(18),
    height: w(18),
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: COLORS.black,
  },
});

export default SRadio;
