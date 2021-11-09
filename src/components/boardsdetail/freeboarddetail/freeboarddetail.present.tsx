import React from 'react';
import { Wrapper, MainText, Button1 } from './freeboarddetail.styles';
import { useNavigation } from '@react-navigation/native';

const FreeBoardDetailUI = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <MainText>여기는 커뮤니티디테일페이지입니다</MainText>
      <Button1
        title="커뮤니티수정페이지가기"
        onPress={() => navigation.navigate('커뮤니티게시판수정')}
      />
    </Wrapper>
  );
};

export default FreeBoardDetailUI;
