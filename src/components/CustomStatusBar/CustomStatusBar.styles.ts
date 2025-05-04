import {Platform, StyleSheet} from 'react-native';
import {h} from '../../utils/globalFunctions';
import {OS} from '../../utils/constants/keywords';

const SCSB = StyleSheet.create({
  container: {
    height: Platform.OS === OS.ios ? h(20) : 0,
  },
});

export default SCSB;
