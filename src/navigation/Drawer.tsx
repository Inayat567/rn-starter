import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator();

const Root = () => {
  const About = () => <></>;
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="bottom">
      {/* if you have bottom tab */}
      <Drawer.Screen name="bottom" component={BottomTab} />
      <Drawer.Screen name="about" component={About} />
    </Drawer.Navigator>
  );
};

export default Root;
