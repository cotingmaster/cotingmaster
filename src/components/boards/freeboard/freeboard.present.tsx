import React from 'react';
import { Wrapper, MainText, Button1 } from './freeboard.styles';
import { useNavigation } from '@react-navigation/native';

const FreeBoardUI = ({ navigate }) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <MainText>여기는 커뮤니티페이지입니다</MainText>
      <Button1
        title="커뮤니티디테일페이지가기"
        onPress={() => navigation.navigate('커뮤니티게시판디테일')}
      />
      <Button1
        title="커뮤니티등록페이지가기"
        onPress={() => navigation.navigate('커뮤니티게시판등록')}
      />
    </Wrapper>
  );
};

export default FreeBoardUI;
