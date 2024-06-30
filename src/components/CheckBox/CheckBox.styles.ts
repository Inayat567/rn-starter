import {StyleSheet} from 'react-native';
import {normalizeFont, normalizeHeight, normalizeWidth} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const SCheckBox = StyleSheet.create({
  container: {
    margin: 10,
  },
  icon: {
    width: normalizeWidth(22),
    height: normalizeHeight(25),
    borderRadius: 5,
  },
  title: {
    fontSize: normalizeFont(18),
    fontWeight: 'bold',
    color: COLORS.black,
    textDecorationLine: 'none',
  },
});

export default SCheckBox;
