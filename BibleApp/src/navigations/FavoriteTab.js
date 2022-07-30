import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform, Pressable, Button, Text, Alert} from 'react-native';

import DisplayChapter from '../screens/DisplayChapter';
import SelectChapter from '../screens/SelectChapter';
import SelectBook from '../screens/SelectBook';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Favorites from '../tabs/Favorites';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage, hideMessage} from 'react-native-flash-message';
import Toast from 'react-native-toast-message';
import DisplayFavorite from '../screens/DisplayFavorite';

Ionicons.loadFont();

const FavNav = createNativeStackNavigator();

const FavoritesNavigation = () => {
  return (
    <FavNav.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#ffffff'},
        headerStyle: {
          height: 110,
          backgroundColor: '#ffffff',
          borderBottomWidth: 5,
        },
        headerTitleStyle: {color: '#000000', fontSize: 18},
        // headerRight: () => {
        //   <Button title="abcdefg" />;
        // },
      }}>
      <FavNav.Screen
        name="Favorites"
        component={Favorites}
        options={{title: 'Favorites'}}
      />
      <FavNav.Screen
        name="DisplayFavorite"
        component={DisplayFavorite}
        options={({route}) => ({
          title: route.params.bookName + ' ' + route.params.index,
        })}
      />
    </FavNav.Navigator>
  );
};

export default FavoritesNavigation;
