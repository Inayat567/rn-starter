import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/color';
import {h} from '../../utils/globalFunctions';

const SLoader = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.transparent,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 50,
    height: h(50),
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
});

export default SLoader;
