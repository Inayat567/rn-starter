import {StyleSheet} from 'react-native';
import {normalizeFont, normalizeHeight} from '../../utils/globalFunctions';
import { COLORS } from '../../utils/constants/color';

const SButton = StyleSheet.create({
  container: {
    width: '90%',
    height: normalizeHeight(50),
    backgroundColor: COLORS.button,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: normalizeHeight(10)
  },
  title: {
    color: COLORS.white,
    fontSize: normalizeFont(16),
    fontWeight: 'bold',
  },
  inActive: {
    backgroundColor: COLORS.gray,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
});

export default SButton;
