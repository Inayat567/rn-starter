import {Text} from 'react-native';
import React from 'react';
import {HeadingProp} from './Heading';
import SHeading from './Heading.styles';

const H1 = ({text, style, onPress}: HeadingProp) => (
  <Text
    testID="h1"
    style={[SHeading.h1, style]}
    onPress={onPress ? onPress : () => {}}>
    {text}
  </Text>
);

export default H1;
