import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';

import DisplayChapter from '../screens/DisplayChapter';
import SelectChapter from '../screens/SelectChapter';
import SelectBook from '../screens/SelectBook';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#ffffff'},
        headerStyle: {
          height: 110,
          backgroundColor: '#ffffff',
          borderBottomWidth: 5,
        },
        headerTitleStyle: {color: '#000000', fontSize: 24},
      }}>
      <Stack.Screen name="SelectBook" component={SelectBook} />
      <Stack.Screen
        name="SelectChapter"
        component={SelectChapter}
        // options={{headershown: false}}
      />
      <Stack.Screen name="Display Chapter" component={DisplayChapter} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
