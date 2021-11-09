import React from 'react';
import { Wrapper, MainText, Button1 } from './meetingdetail.styles';
import { useNavigation } from '@react-navigation/native';

const MeetingDetailUI = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <MainText>여기는 만남디테일페이지입니다</MainText>
      <Button1
        title="만남수정페이지가기"
        onPress={() => navigation.navigate('만남게시판수정')}
      />
    </Wrapper>
  );
};

export default MeetingDetailUI;
