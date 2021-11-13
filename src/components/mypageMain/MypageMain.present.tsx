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

const MyPageMainUI = ({ navigate }: any, props: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Wrapper>
        <ProfileDefault
          source={require('../../../public/images/defaultprofile.png')}
        />

        <NameView>
          {/* {props.data?.fetchUserLoggedIn.name} */}
          <NickNameView>
            <NickName>이상혁</NickName>
          </NickNameView>
          <LogOutView>
            <LogOutText>로그아웃</LogOutText>
          </LogOutView>
        </NameView>
        <ButtonView>
          <MyBoards>
            <ButtonImage></ButtonImage>
            <MyBoardsText>내가쓴글</MyBoardsText>
          </MyBoards>
          <MyLike>
            <ButtonImage></ButtonImage>
            <MyLikeText>좋아요!</MyLikeText>
          </MyLike>
          <ProfileUpdate>
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
  /* <Button1
        title="프로필수정하기"
        onPress={() => navigation.navigate('프로필수정')}
      />
      <Button1
        title="내가누른좋아요"
        onPress={() => navigation.navigate('내가누른좋아요')}
      />
      <Button1
        title="내가쓴글보기"
        onPress={() => navigation.navigate('내가쓴글보기')}
      />
      <Button1
        title="동창회비 내역"
        onPress={() => navigation.navigate('동창회비내역')}
      /> */
}
