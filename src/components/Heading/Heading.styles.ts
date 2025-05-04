import {StyleSheet} from 'react-native';
import {f} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const SHeading = StyleSheet.create({
  h1: {
    fontSize: f(20), // set according to UI design
    fontWeight: 'bold',
    color: COLORS.black,
    margin: 10,
  },
  h2: {
    fontSize: f(16), // set according to UI design
    fontWeight: 'bold',
    color: COLORS.black,
    margin: 10,
  },
  h3: {
    fontSize: f(12), // set according to UI design
    fontWeight: 'bold',
    color: COLORS.black,
    margin: 10,
  },
  text: {
    fontSize: f(14), // set according to UI design
    color: COLORS.black,
    margin: 10,
  },
  boldText: {
    fontSize: f(14), // set according to UI design
    fontWeight: 'bold',
    color: COLORS.black,
    margin: 10,
  },
});

export default SHeading;
