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
          backgroundColor: '#95a5a6',
          borderBottomWidth: 5,
          borderBottomColor: '#34495e',
        },
        headerTitleStyle: {color: '#ffffff', fontSize: 24},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="SelectBook" component={SelectBook} />
      <Stack.Screen
        name="SelectChapter"
        component={SelectChapter}
        // options={{headershown: false}}
      />
      <Stack.Screen name="DisplayChapter" component={DisplayChapter} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
