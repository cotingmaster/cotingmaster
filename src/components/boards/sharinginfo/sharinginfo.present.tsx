import React from 'react';
import { Wrapper, MainText, Button1 } from './sharinginfo.styles';
import { useNavigation } from '@react-navigation/native';

const SharinginfoUI = ({ navigate }) => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <MainText>여기는 정보공유리스트페이지입니다</MainText>
      <Button1
        title="정보디테일페이지가기"
        onPress={() => navigation.navigate('정보공유게시판디테일')}
      />
      <Button1
        title="정보공유등록페이지가기"
        onPress={() => navigation.navigate('정보공유게시판등록')}
      />
    </Wrapper>
  );
};

export default SharinginfoUI;
