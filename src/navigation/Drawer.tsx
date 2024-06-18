import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="about" component={() => <></>} />
    </Drawer.Navigator>
  );
};

export default Root;
