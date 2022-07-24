import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigation from './Stack';

import Setting from '../tabs/Setting';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
Ionicons.loadFont();
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
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name={'settings'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
