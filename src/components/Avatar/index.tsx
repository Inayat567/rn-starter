import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {AvatarProps} from './Avatar';
import SAvatar from './Avatar.styles';
import {COLORS} from '../../utils/constants/color';

const Avatar = ({
  src,
  size,
  border,
  borderColor,
  style,
  onPress,
}: AvatarProps) => {
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          testID="avatar"
          source={{uri: src}}
          style={[
            SAvatar.container,
            style,
            {
              borderWidth: border ? 1 : 0,
              borderColor: borderColor ? borderColor : COLORS.black,
            },
            size === 'l'
              ? SAvatar.large
              : size === 's'
              ? SAvatar.small
              : SAvatar.medium,
          ]}
        />
      </TouchableOpacity>
    );
  } else {
    return (
      <Image
        testID="avatar"
        source={{uri: src}}
        style={[
          SAvatar.container,
          style,
          {
            borderWidth: border ? 1 : 0,
            borderColor: borderColor ? borderColor : COLORS.black,
          },
          size === 'l'
            ? SAvatar.large
            : size === 's'
            ? SAvatar.small
            : SAvatar.medium,
        ]}
      />
    );
  }
};

export default Avatar;
