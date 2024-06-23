import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import {LoaderProps} from './Loader';
import SLoader from './Loader.styles';

const Loader = ({isLoading, size, color}: LoaderProps) => {
  return (
    <View style={SLoader.container}>
      <Modal visible={isLoading} transparent>
        <ActivityIndicator size={size ?? 'large'} color={color ?? 'blue'} />
      </Modal>
    </View>
  );
};

export default Loader;
