import {Text} from 'react-native';
import React from 'react';
import {HeadingProp} from './Heading';
import SHeading from './Heading.styles';

const H3 = ({text, style, onPress}: HeadingProp) => (
  <Text
    testID="h3"
    style={[SHeading.h3, style]}
    onPress={onPress ? onPress : () => {}}>
    {text}
  </Text>
);
export default H3;
