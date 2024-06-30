import {Text} from 'react-native';
import {HeadingProp} from './Heading';
import SHeading from './Heading.styles';

const NormalText = ({text, style}: HeadingProp) => (
  <Text testID="normalText" style={[SHeading.text, style]}>
    {text}
  </Text>
);

export default NormalText;
