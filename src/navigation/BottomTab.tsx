import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import { normalizeFont } from '../utils/globalFunctions';
import { COLORS } from '../utils/constants/color';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabelStyle:{fontSize: 0},
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={normalizeFont(30)} color={focused ? '#00F' : '#000'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
