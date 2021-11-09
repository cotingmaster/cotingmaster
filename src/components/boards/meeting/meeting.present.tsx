import React from 'react';
import { Wrapper, MainText, Button1 } from './meeting.styles';
import { useNavigation } from '@react-navigation/native';

const MeetingUI = ({ navigate }) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <MainText>여기는 만남페이지입니다</MainText>
      <Button1
        title="만남디테일페이지가기"
        onPress={() => navigation.navigate('만남게시판디테일')}
      />
      <Button1
        title="만남등록페이지가기"
        onPress={() => navigation.navigate('만남게시판등록')}
      />
    </Wrapper>
  );
};

export default MeetingUI;
