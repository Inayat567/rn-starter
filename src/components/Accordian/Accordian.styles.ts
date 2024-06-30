import {StyleSheet} from 'react-native';
import {normalizeFont, normalizeHeight, normalizeWidth} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const SAccordian = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    marginVertical: normalizeHeight(10),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalizeWidth(10),
    paddingVertical: normalizeHeight(5),
  },
  title: {
    color: COLORS.black,
    fontSize: normalizeFont(16),
    paddingVertical: normalizeHeight(5),
  },
  contentContainer: {
    paddingVertical: normalizeHeight(10),
  },
});

export default SAccordian;
