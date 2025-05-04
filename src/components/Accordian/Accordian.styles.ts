import {StyleSheet} from 'react-native';
import {f, h, w} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const SAccordian = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    marginVertical: h(10),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: w(10),
    paddingVertical: h(5),
  },
  title: {
    color: COLORS.black,
    fontSize: f(16),
    paddingVertical: h(5),
  },
  contentContainer: {
    paddingVertical: h(10),
  },
});

export default SAccordian;
