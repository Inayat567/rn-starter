import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ItemProp, RadioProp} from './Radio';
import {FlatList} from 'react-native';
import SRadio from './Radio.styles';
import {NormalText} from '../Heading';
import {COLORS} from '../../utils/constants/color';

const Radio = ({data, selectedOption, selectOption}: RadioProp) => {
  const renderItem = ({item}: {item: ItemProp}) => {
    return (
      <View style={SRadio.container}>
        <TouchableOpacity
          onPress={() => selectOption(item.label)}
          style={[
            SRadio.circle,
            {
              backgroundColor:
                item.label === selectedOption ? COLORS.success : COLORS.white,
            },
          ]}
        />
        <NormalText text={item.label} />
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Radio;
