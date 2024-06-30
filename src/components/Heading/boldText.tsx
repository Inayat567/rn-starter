import {Text} from 'react-native';
import {HeadingProp} from './Heading';
import SHeading from './Heading.styles';

const BoldText = ({text, style}: HeadingProp) => (
  <Text testID="boldText" style={[SHeading.boldText, style]}>
    {text}
  </Text>
);

export default BoldText;
