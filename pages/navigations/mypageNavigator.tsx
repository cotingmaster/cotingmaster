import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyPageMainScreen from '../screens/mypageScreens/main';
import ProfileUpdateScreen from '../screens/mypageScreens/profileupdate';
import MyLikeScreen from '../screens/mypageScreens/mylike';
import MyboardsScreen from '../screens/mypageScreens/myboards';
import MemberShipFeeScreen from '../screens/mypageScreens/membershipfee';
import SharingInfoDetailScreen from '../screens/boarddetail/sharinginfo';
import MeetingDetailScreen from '../screens/boarddetail/meeting';
import FreeBoardDetailScreen from '../screens/boarddetail/freeboard';

const MyPageNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="메인" component={MyPageMainScreen} />
      <Stack.Screen name="프로필수정" component={ProfileUpdateScreen} />
      <Stack.Screen name="내가누른좋아요" component={MyLikeScreen} />
      <Stack.Screen name="내가쓴글보기" component={MyboardsScreen} />
      <Stack.Screen name="동창회비내역" component={MemberShipFeeScreen} />

      <Stack.Screen
        name="정보공유게시판디테일"
        component={SharingInfoDetailScreen}
      />
      <Stack.Screen name="만남게시판디테일" component={MeetingDetailScreen} />
      <Stack.Screen name="잡담게시판디테일" component={FreeBoardDetailScreen} />
    </Stack.Navigator>
  );
};

export default MyPageNavigator;
