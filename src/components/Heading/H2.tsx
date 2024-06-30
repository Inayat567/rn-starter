import {Text} from 'react-native';
import React from 'react';
import {HeadingProp} from './Heading';
import SHeading from './Heading.styles';

const H2 = ({text, style, onPress}: HeadingProp) => (
  <Text
    testID="h2"
    style={[SHeading.h2, style]}
    onPress={onPress ? onPress : () => {}}>
    {text}
  </Text>
);
export default H2;
