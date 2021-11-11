import React from 'react';
import {
  Wrapper,
  MainTitle,
  Box,
  Tilte,
  Contents,
  BottomView,
  Date,
  NickName,
  Button1,
} from './sharinginfo.styles';
import { useNavigation } from '@react-navigation/native';

const SharinginfoUI = ({ navigate }: any) => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <MainTitle>정보공유</MainTitle>
      <Box>
        <Tilte>ReactNative</Tilte>
        <Contents>내용입니다</Contents>
        <BottomView>
          <Date>2021.11.11</Date>
          <NickName>코딩싫어</NickName>
        </BottomView>
      </Box>
      <Box>
        <Tilte>ReactNative</Tilte>
        <Contents>내용입니다</Contents>
        <BottomView>
          <Date>2021.11.11</Date>
          <NickName>코딩싫어</NickName>
        </BottomView>
      </Box>
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
