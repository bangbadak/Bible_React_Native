import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './navigations/Tab';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
