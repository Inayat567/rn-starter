import {Platform, StyleSheet} from 'react-native';
import {normalizeHeight} from '../../utils/globalFunctions';
import {OS} from '../../utils/constants/keywords';

const SCSB = StyleSheet.create({
  container: {
    height: Platform.OS === OS.ios ? normalizeHeight(20) : 0,
  },
});

export default SCSB;
