import React from 'react';
import {
  ScrollView,
  Wrapper,
  MainTitle,
  Box,
  Tilte,
  Contents,
  BottomView,
  Date,
  NickName,
  RegisterView,
  ButtonImage,
} from './sharinginfo.styles';
import { useNavigation } from '@react-navigation/native';

const SharinginfoUI = ({ navigate }: any) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
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
      </Wrapper>
      <RegisterView onPress={() => navigation.navigate('정보공유게시판등록')}>
        <ButtonImage
          source={require('../../../../public/images/writebutton.png')}
        />
      </RegisterView>
    </ScrollView>
  );
};

export default SharinginfoUI;

{
  /* <Button1
        title="정보디테일페이지가기"
        onPress={() => navigation.navigate('정보공유게시판디테일')}
      />
      <Button1
        title="정보공유등록페이지가기"
        onPress={() => navigation.navigate('정보공유게시판등록')}
      /> */
}
