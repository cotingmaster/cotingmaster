import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/searchScreens/search';
import SharingInfoDetailScreen from '../screens/boarddetail/sharinginfo';
import MeetingDetailScreen from '../screens/boarddetail/meeting';
import FreeBoardDetailScreen from '../screens/boarddetail/freeboard';

const SearchNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="검색" component={SearchScreen} />
      <Stack.Screen
        name="정보공유게시판디테일"
        component={SharingInfoDetailScreen}
      />
      <Stack.Screen name="만남게시판디테일" component={MeetingDetailScreen} />
      <Stack.Screen name="잡담게시판디테일" component={FreeBoardDetailScreen} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
