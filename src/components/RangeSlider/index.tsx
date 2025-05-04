import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import RangeSlider from 'rn-range-slider';
import {RangeSliderProp} from './RangeSlider';
import SRangeSlider from './RangeSlider.styles';
import {NormalText} from '../Heading';

const RangeSliders = ({title, value, onChange}: RangeSliderProp) => {
  const renderThumb = useCallback(() => <Text />, []);
  const renderRail = useCallback(
    () => (
      <View
        style={{
          width: '100%',
          borderWidth: 3,
          borderRadius: 10,
        }}
      />
    ),
    [],
  );
  const renderRailSelected = useCallback(
    () => (
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          backgroundColor: 'green',
        }}
      />
    ),
    [],
  );
  const renderLabel = useCallback(
    (val: number) => <NormalText text={val.toString()} />,
    [],
  );
  // const renderNotch = useCallback(() => <></>, []);

  return (
    <View style={SRangeSlider.container}>
      <NormalText text={title} />
      <RangeSlider
        style={SRangeSlider.slider}
        min={0}
        max={100}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        // renderNotch={renderNotch}
        onValueChanged={onChange}
      />
    </View>
  );
};

export default RangeSliders;
