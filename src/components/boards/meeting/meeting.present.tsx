import React from 'react';
import {
  Wrapper,
  MainTitle,
  Box,
  Tilte,
  Place,
  BottomView,
  Date,
  NickName,
} from './meeting.styles';
import { useNavigation } from '@react-navigation/native';

const MeetingUI = ({ navigate }: any) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <MainTitle>만남</MainTitle>
      <Box>
        <Tilte>술한잔하자</Tilte>
        <Place>패스트파이브앞호식이두마리치킨</Place>
        <BottomView>
          <Date>2021.11.11</Date>
          <NickName>코딩싫어</NickName>
        </BottomView>
      </Box>
      <Box>
        <Tilte>밥한끼하자</Tilte>
        <Place>패스트파이브앞</Place>
        <BottomView>
          <Date>2021.11.11</Date>
          <NickName>코딩싫어</NickName>
        </BottomView>
      </Box>
    </Wrapper>
  );
};

export default MeetingUI;

{
  /* <Button1
        title="만남디테일페이지가기"
        onPress={() => navigation.navigate('만남게시판디테일')}
      />
      <Button1
        title="만남등록페이지가기"
        onPress={() => navigation.navigate('만남게시판등록')}
      /> */
}
