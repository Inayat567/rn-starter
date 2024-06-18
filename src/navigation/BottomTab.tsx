import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen name="home" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTab;
