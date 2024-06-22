import {ImageSourcePropType, ImageStyle} from 'react-native';

export interface AvatarProps {
  src: ImageSourcePropType;
  size?: 's' | 'm' | 'l';
  rounded?: boolean;
  border?: boolean;
  circle?: boolean;
  style?: ImageStyle;
  onPress?: () => void;
}
