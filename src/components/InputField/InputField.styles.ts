import {Dimensions, StyleSheet} from 'react-native';
import {h, w} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const {width} = Dimensions.get('window');

const SInputField = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: w(width * 0.95),
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginVertical: h(5),
    paddingHorizontal: w(10),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    color: COLORS.black,
    height: '100%',
    backgroundColor: 'red'
  },
});

export default SInputField;
