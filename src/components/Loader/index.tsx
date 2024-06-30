import {View, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import {LoaderProps} from './Loader';
import SLoader from './Loader.styles';

const Loader = ({isLoading, size, color}: LoaderProps) => {
  if (isLoading) {
    return (
      <View style={SLoader.container}>
        <Modal visible={isLoading} transparent>
          <View style={SLoader.modal}>
            <ActivityIndicator
              style={SLoader.indicator}
              size={size ?? 'large'}
              color={color ?? 'blue'}
            />
          </View>
        </Modal>
      </View>
    );
  } else {
    return null;
  }
};

export default Loader;
