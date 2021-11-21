import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreens/main';
import MeetingScreen from '../screens/homeScreens/meeting';
import SharinginfoScreen from '../screens/homeScreens/sharinginfo';
import FreeBoardScreen from '../screens/homeScreens/freeboard';
import FreeBoardDetailScreen from '../screens/boarddetail/freeboard';
import FreeBoardUpdateScreen from '../screens/boardupdate/freeboard';
import MeetingDetailScreen from '../screens/boarddetail/meeting';
import SharingInfoDetailScreen from '../screens/boarddetail/sharinginfo';
import SharingInfoUpdateScreen from '../screens/boardupdate/sharinginfo';
import MeetingUpdateScreen from '../screens/boardupdate/meeting';
import SharingInfoWriteScreen from '../screens/boardwrite/sharinginfo';
import MeetingWriteScreen from '../screens/boardwrite/meeting';
import FreeBoardWriteScreen from '../screens/boardwrite/freeboard';
import CommentWrite from '../../src/components/comment/comment_write/CommentWrite.container';
import CommentList from '../../src/components/comment/comment_list/CommentList.container';
import ModalUpdateScreen from '../screens/modal/updatemodal';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="메인" component={HomeScreen} />
      <Stack.Screen name="정보공유게시판" component={SharinginfoScreen} />
      <Stack.Screen name="만남게시판" component={MeetingScreen} />
      <Stack.Screen name="잡담게시판" component={FreeBoardScreen} />
      <Stack.Screen
        name="정보공유게시판등록"
        component={SharingInfoWriteScreen}
      />
      <Stack.Screen
        name="정보공유게시판디테일"
        component={SharingInfoDetailScreen}
      />
      <Stack.Screen
        name="정보공유게시판수정"
        component={SharingInfoUpdateScreen}
      />
      <Stack.Screen name="만남게시판등록" component={MeetingWriteScreen} />
      <Stack.Screen name="만남게시판디테일" component={MeetingDetailScreen} />
      <Stack.Screen name="만남게시판수정" component={MeetingUpdateScreen} />
      <Stack.Screen name="잡담게시판등록" component={FreeBoardWriteScreen} />
      <Stack.Screen name="잡담게시판디테일" component={FreeBoardDetailScreen} />
      <Stack.Screen name="잡담게시판수정" component={FreeBoardUpdateScreen} />
      <Stack.Screen name="업데이트모달" component={ModalUpdateScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
