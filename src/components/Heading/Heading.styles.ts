import {StyleSheet} from 'react-native';
import {normalizeFont} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const SHeading = StyleSheet.create({
  h1: {
    fontSize: normalizeFont(20), // set according to UI design
    fontWeight: 'bold',
    color: COLORS.black,
  },
  h2: {
    fontSize: normalizeFont(16), // set according to UI design
    fontWeight: 'bold',
    color: COLORS.black,
  },
  h3: {
    fontSize: normalizeFont(12), // set according to UI design
    fontWeight: 'bold',
    color: COLORS.black,
  },
  text: {
    fontSize: normalizeFont(14), // set according to UI design
    color: COLORS.black,
  },
  boldText: {
    fontSize: normalizeFont(14), // set according to UI design
    fontWeight: 'bold',
    color: COLORS.black,
  },
});

export default SHeading;
