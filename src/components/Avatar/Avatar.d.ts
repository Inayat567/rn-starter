import {ImageSourcePropType, ImageStyle} from 'react-native';

export interface AvatarProps {
  src: string;
  size?: 's' | 'm' | 'l';
  border?: boolean;
  borderColor?: string,
  style?: ImageStyle;
  onPress?: () => void;
}
