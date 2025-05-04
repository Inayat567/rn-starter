import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {f} from '../utils/globalFunctions';
import {COLORS} from '../utils/constants/color';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="search"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon
              name="search"
              size={f(30)}
              color={focused ? COLORS.black : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="wallet"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon
              name="wallet"
              size={f(30)}
              color={focused ? COLORS.black : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={f(30)}
              color={focused ? COLORS.black : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon
              name="person"
              size={f(30)}
              color={focused ? COLORS.black : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="setting"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon
              name="settings"
              size={f(30)}
              color={focused ? COLORS.black : COLORS.gray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
