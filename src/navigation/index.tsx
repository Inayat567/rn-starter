import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import Root from './Drawer';

const BaseNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="bottom">
        <Stack.Screen name="root" component={Root} />
        <Stack.Screen name="bottom" component={BottomTab} />
        <Stack.Screen name="other" component={() => <></>} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseNavigation;
