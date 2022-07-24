import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './navigations/Tab';
import SetLocalDatas from './SetLocalDatas';

const App = () => {
  // useEffect(() => {
  //   console.log(SetLocalDatas());
  // }, []);

  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
