import React from 'react';
import { Wrapper, MainText, Button1 } from './sharinginfodetail.styles';
import { useNavigation } from '@react-navigation/native';

const SharingInfodDetailUI = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <MainText>여기는 정보공유디테일페이지입니다</MainText>
      <Button1
        title="정보공유수정페이지가기"
        onPress={() => navigation.navigate('정보공유게시판수정')}
      />
    </Wrapper>
  );
};

export default SharingInfodDetailUI;
