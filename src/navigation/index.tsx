import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import Root from './Drawer';

const BaseNavigation = () => {
  const Stack = createNativeStackNavigator();

  const Other = () => <></>;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="root"
        screenOptions={{
          headerShown: false,
        }}>
        {/* if you have drawer */}
        <Stack.Screen name="root" component={Root} />
        {/* if you dont have drawer */}
        <Stack.Screen name="bottom" component={BottomTab} />
        <Stack.Screen name="other" component={Other} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseNavigation;
