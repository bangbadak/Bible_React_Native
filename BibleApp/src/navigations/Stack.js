import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';

import DisplayChapter from '../screens/DisplayChapter';
import SelectChapter from '../screens/SelectChapter';
import SelectBook from '../screens/SelectBook';
import IsDownloaded from '../screens/IsDownloaded';

import getBooks from '../localStorage/get/getBooks';
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
        headerTitleStyle: {color: '#000000', fontSize: 18},
      }}
      initialRouteName="SelectBook">
      {/* <Stack.Screen
        name="IsDownloaded"
        component={IsDownloaded}
        options={{
          // headerShown: false,
          title: 'Checking Bible Downloaded',
        }}
      /> */}
      <Stack.Screen
        name="SelectBook"
        component={SelectBook}
        options={{
          title: 'Select Book',
        }}
      />
      <Stack.Screen
        name="SelectChapter"
        component={SelectChapter}
        options={({route}) => ({
          title: route.params.bookName,
        })}
      />
      <Stack.Screen
        name="DisplayChapter"
        title=""
        component={DisplayChapter}
        options={({route}) => ({
          title: route.params.bookName + ' : ' + route.params.index,
        })}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
