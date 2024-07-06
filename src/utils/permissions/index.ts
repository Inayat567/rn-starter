import {Platform} from 'react-native';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {OS} from '../constants/keywords';

export const requestPermissions = async () => {
  const permissions =
    Platform.OS === OS.ios
      ? [PERMISSIONS.IOS.CAMERA]
      : [PERMISSIONS.ANDROID.CAMERA];

  await requestMultiple(permissions);
};
