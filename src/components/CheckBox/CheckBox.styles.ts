import {StyleSheet} from 'react-native';
import {f, h, w} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const SCheckBox = StyleSheet.create({
  container: {
    margin: 10,
  },
  icon: {
    width: w(22),
    height: h(25),
    borderRadius: 5,
  },
  title: {
    fontSize: f(18),
    fontWeight: 'bold',
    color: COLORS.black,
    textDecorationLine: 'none',
  },
});

export default SCheckBox;
