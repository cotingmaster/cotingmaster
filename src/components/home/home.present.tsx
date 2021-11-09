import React from 'react';
import { Wrapper, MainText, Button1 } from './home.styles';
import { useNavigation } from '@react-navigation/native';

const HomeUI = ({ navigate }) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <MainText>여기는 메인페이지입니다</MainText>
      <Button1
        title="정보공유게시판가기"
        onPress={() => navigation.navigate('정보공유게시판')}
      />
      <Button1
        title="만남게시판가기"
        onPress={() => navigation.navigate('만남게시판')}
      />
      <Button1
        title="커뮤니티게시판가기"
        onPress={() => navigation.navigate('커뮤니티게시판')}
      />
    </Wrapper>
  );
};

export default HomeUI;
