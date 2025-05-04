import {StyleSheet} from 'react-native';
import {f, h, w} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const SButton = StyleSheet.create({
  container: {
    width: w(320),
    height: h(50),
    backgroundColor: COLORS.button,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: h(10),
  },
  title: {
    color: COLORS.white,
    fontSize: f(16),
    fontWeight: 'bold',
  },
  inActive: {
    backgroundColor: COLORS.gray,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
});

export default SButton;
