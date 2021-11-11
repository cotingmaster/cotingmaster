import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyPageMainScreen from '../screens/mypageScreens/main';
import ProfileUpdateScreen from '../screens/mypageScreens/profileupdate';
import MyLikeScreen from '../screens/mypageScreens/mylike';
import MyboardsScreen from '../screens/mypageScreens/myboards';
import MemberShipFeeScreen from '../screens/mypageScreens/membershipfee';

const MyPageNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="메인" component={MyPageMainScreen} />
      <Stack.Screen name="프로필수정" component={ProfileUpdateScreen} />
      <Stack.Screen name="내가누른좋아요" component={MyLikeScreen} />
      <Stack.Screen name="내가쓴글보기" component={MyboardsScreen} />
      <Stack.Screen name="동창회비내역" component={MemberShipFeeScreen} />
    </Stack.Navigator>
  );
};

export default MyPageNavigator;
