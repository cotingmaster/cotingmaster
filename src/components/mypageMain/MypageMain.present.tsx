import React from 'react';
import {
  ScrollView,
  Wrapper,
  ProfileDefault,
  NameView,
  LogOutView,
  LogOutText,
  NickNameView,
  NickName,
  ButtonView,
  MyBoards,
  MyBoardsText,
  MyLike,
  MyLikeText,
  ProfileUpdate,
  ProfileUpdateText,
  ButtonImage,
  BoardContainer,
  BoardTitle,
  Box,
  Tilte,
  Contents,
  BottomView,
  Date,
  NickName2,
} from './MypageMain.styles';
import { useNavigation } from '@react-navigation/native';

const MyPageMainUI = (props: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Wrapper>
        <ProfileDefault
          source={require('../../../public/images/defaultprofile.png')}
        />

        <NameView>
          <NickNameView>
            <NickName>{props.data?.fetchUserLoggedIn.name}</NickName>
          </NickNameView>
          <LogOutView onPress={props.onPressLogout}>
            <LogOutText>로그아웃</LogOutText>
          </LogOutView>
        </NameView>
        <ButtonView>
          <MyBoards onPress={props.onPressMyBoards}>
            <ButtonImage></ButtonImage>
            <MyBoardsText>내가쓴글</MyBoardsText>
          </MyBoards>
          <MyLike onPress={props.onPressMyLike}>
            <ButtonImage></ButtonImage>
            <MyLikeText>좋아요!</MyLikeText>
          </MyLike>
          <ProfileUpdate onPress={() => navigation.navigate('프로필수정')}>
            <ButtonImage></ButtonImage>
            <ProfileUpdateText>프로필수정</ProfileUpdateText>
          </ProfileUpdate>
        </ButtonView>
        <BoardContainer>
          <BoardTitle>정보공유</BoardTitle>
          <Box>
            <Tilte>ReactNative</Tilte>
            <Contents>내용입니다</Contents>
            <BottomView>
              <Date>2021.11.11</Date>
              <NickName2>코딩싫어</NickName2>
            </BottomView>
          </Box>
        </BoardContainer>
      </Wrapper>
    </ScrollView>
  );
};

export default MyPageMainUI;

{
  /* <ScrollView>
      <Wrapper>
        <ProfileDefault
          source={require('../../../public/images/defaultprofile.png')}
        />

        <NameView>
          <NickNameView>
            <NickName>{data?.fetchUserLoggedIn.name}</NickName>
          </NickNameView>
          <LogOutView onPress={onPressLogout}>
            <LogOutText>로그아웃</LogOutText>
          </LogOutView>
        </NameView>
        <ButtonView>
          <MyBoards onPress={() => navigation.navigate('내가쓴글보기')}>
            <ButtonImage></ButtonImage>
            <MyBoardsText>내가쓴글</MyBoardsText>
          </MyBoards>
          <MyLike onPress={() => navigation.navigate('내가누른좋아요')}>
            <ButtonImage></ButtonImage>
            <MyLikeText>좋아요!</MyLikeText>
          </MyLike>
          <ProfileUpdate onPress={() => navigation.navigate('프로필수정')}>
            <ButtonImage></ButtonImage>
            <ProfileUpdateText>프로필수정</ProfileUpdateText>
          </ProfileUpdate>
        </ButtonView>
        <BoardContainer>
          <BoardTitle>정보공유</BoardTitle>
          <Box>
            <Tilte>ReactNative</Tilte>
            <Contents>내용입니다</Contents>
            <BottomView>
              <Date>2021.11.11</Date>
              <NickName2>코딩싫어</NickName2>
            </BottomView>
          </Box>
        </BoardContainer>
      </Wrapper>
    </ScrollView>
  ); */
}
