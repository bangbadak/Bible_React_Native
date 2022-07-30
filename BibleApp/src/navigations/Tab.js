import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigation from './Stack';

import Favorites from '../tabs/Favorites';
import FavoritesTab from './FavoriteTab';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff',
          //   borderTopColor: '#000000',
          //   borderTopWidth: 0.3,
        },
        tabBarShowLabel: false,
        // tabBarLabelPosition: 'beside-icon',
        // activeTintColor: '#ffffff',
        // inactiveTintColor: '#cfcfcf',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Bible"
        component={StackNavigation}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name={'book'} color={color} size={size} />
          ),
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#bbbbbb',
        }}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesTab}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name={'bookmark'} color={color} size={size} />
          ),
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#bbbbbb',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
