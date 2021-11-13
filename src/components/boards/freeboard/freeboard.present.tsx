import React from 'react';
import {
  ScrollView,
  Wrapper,
  MainTitle,
  Box,
  Tilte,
  Place,
  BottomView,
  Date,
  NickName,
  RegisterView,
  ButtonImage,
} from './freeboard.styles';
import { useNavigation } from '@react-navigation/native';

const FreeBoardUI = ({ navigate }: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Wrapper>
        <MainTitle>커뮤니티</MainTitle>
        <Box>
          <Tilte>술한잔하자</Tilte>
          <Place>패스트파이브앞호식이두마리치킨</Place>
          <BottomView>
            <Date>2021.11.11</Date>
            <NickName>코딩싫어</NickName>
          </BottomView>
        </Box>
        <Box>
          <Tilte>술한잔하자</Tilte>
          <Place>패스트파이브앞호식이두마리치킨</Place>
          <BottomView>
            <Date>2021.11.11</Date>
            <NickName>코딩싫어</NickName>
          </BottomView>
        </Box>
      </Wrapper>
      <RegisterView onPress={() => navigation.navigate('커뮤니티게시판등록')}>
        <ButtonImage
          source={require('../../../../public/images/writebutton.png')}
        />
      </RegisterView>
    </ScrollView>
  );
};

export default FreeBoardUI;

{
  /* <Button1
title="커뮤니티디테일페이지가기"
onPress={() => navigation.navigate('커뮤니티게시판디테일')}
/>
<Button1
title="커뮤니티등록페이지가기"
onPress={() => navigation.navigate('커뮤니티게시판등록')}
/> */
}
