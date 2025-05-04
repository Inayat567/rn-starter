import {StyleSheet} from 'react-native';
import {h, w} from '../../utils/globalFunctions';

const SAvatar = StyleSheet.create({
  container: {
    marginVertical: h(10),
    margin: 10,
  },
  small: {
    width: w(40),
    height: h(40),
    borderRadius: 20,
    // aspectRatio: '0.2',
  },
  medium: {
    width: w(80),
    height: h(80),
    borderRadius: 40,
    // aspectRatio: '0.4',
  },
  large: {
    width: w(120),
    height: h(120),
    borderRadius: 80,
    // aspectRatio: '0.6',
  },
});

export default SAvatar;
