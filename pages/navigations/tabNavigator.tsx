import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './homeNavigator';
import MyPageNavigator from './mypageNavigator';
import SearchNavigator from './searchNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={SearchNavigator}></Tab.Screen>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageNavigator}
        options={{
          headerShown: false,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
