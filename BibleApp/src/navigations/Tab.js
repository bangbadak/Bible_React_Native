import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigation from './Stack';

import Setting from '../tabs/Setting';
import setting from '../../assets/images/setting.png';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabIcon = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />;
};

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
      <Tab.Screen name="Bible" component={StackNavigation} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
