import {StyleSheet} from 'react-native';
import { normalizeHeight } from '../../utils/globalFunctions';

const SAvatar = StyleSheet.create({
  container: {
    marginVertical: normalizeHeight(10),
    margin: 10,
  },
  small: {
    width: 40,
    height: normalizeHeight(40),
    borderRadius: 20
    // aspectRatio: '0.2',
  },
  medium: {
    width: 80,
    height: normalizeHeight(80),
    borderRadius: 40
    // aspectRatio: '0.4',
  },
  large: {
    width: 120,
    height: normalizeHeight(120),
    borderRadius: 80,
    // aspectRatio: '0.6',
  },
});

export default SAvatar;
