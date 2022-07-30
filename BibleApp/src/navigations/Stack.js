import React, {useEffect, useState, useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderBackButton} from '@react-navigation/elements';
import {Platform, Pressable, Button, Text, Alert} from 'react-native';

import DisplayChapter from '../screens/DisplayChapter';
import SelectChapter from '../screens/SelectChapter';
import SelectBook from '../screens/SelectBook';
import IsDownloaded from '../screens/IsDownloaded';

<<<<<<< HEAD
import getBooks from '../localStorage/get/getBooks';
=======
import Ionicons from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';

Ionicons.loadFont();

>>>>>>> 8c62871
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [isClicked, setIsClicked] = useState(false);
  const ClickedIcon = <Ionicons name={'ios-star'} size={40} />;
  const unClickedIcon = <Ionicons name={'ios-star-outline'} size={40} />;

  // useLayoutEffect(() => {
  //   isStored(route.params.bookName + route.params.index);
  //   console.log('icon: ' + icon);
  // });

  //이거 해야됨

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
<<<<<<< HEAD
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
=======
        // headerRight: () => {
        //   <Button title="abcdefg" />;
        // },
      }}>
>>>>>>> 8c62871
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
        component={DisplayChapter}
        options={({route}) => ({
          headerTitle: route.params.bookName + ' ' + route.params.index,
          bookName: route.params.bookName,
          index: route.params.index,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
