import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/searchScreens/search';

const SearchNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="검색" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
