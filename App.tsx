/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import BaseNavigation from './src/navigation';
import {CustomStatusBar} from './src/components';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <BaseNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
