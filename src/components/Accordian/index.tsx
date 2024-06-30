import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {AccordianProp} from './Accordian';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import SAccordian from './Accordian.styles';
import {normalizeFont} from '../../utils/globalFunctions';
import {COLORS} from '../../utils/constants/color';

const Accordian = ({heading, children}: AccordianProp) => {
  const [collapse, setCollapse] = useState(false);

  const _renderHeader = () => {
    return (
      <Animatable.View
        duration={300}
        transition="backgroundColor"
        style={[
          SAccordian.titleContainer,
          {
            backgroundColor: collapse ? COLORS.white : COLORS.grayExtraLight,
          },
        ]}>
        <Text style={SAccordian.title}>{heading}</Text>
        <Icon
          name={!collapse ? 'chevron-forward' : 'chevron-down'}
          color={COLORS.black}
          size={normalizeFont(20)}
        />
      </Animatable.View>
    );
  };

  const _renderContent = () => {
    return (
      <Animatable.View
        duration={500}
        transition="backgroundColor"
        style={[
          SAccordian.contentContainer,
          {
            backgroundColor: !collapse ? COLORS.white : COLORS.grayExtraLight,
            display: collapse ? 'flex' : 'none',
          },
        ]}>
        {children}
      </Animatable.View>
    );
  };

  return (
    <View testID="accordion">
      <Accordion
        activeSections={[0]}
        sectionContainerStyle={SAccordian.container}
        sections={[children]}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={() => setCollapse(!collapse)}
      />
    </View>
  );
};

export default Accordian;
