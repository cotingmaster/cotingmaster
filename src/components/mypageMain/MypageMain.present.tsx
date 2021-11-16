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
  // BoardContainer,
  // BoardTitle,
  // Box,
  // Tilte,
  // Contents,
  // BottomView,
  // Date,
  // NickName2,
} from './MypageMain.styles';
import { useNavigation } from '@react-navigation/native';
import MyBoardsContainer from '../mypage/myboards/Myboards.container';
import MyLikeContainer from '../mypage/myLike/Mylike.container';

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
            <ButtonImage
              source={require('../../../public/images/myboardsimage.png')}
            />
            <MyBoardsText>내가쓴글</MyBoardsText>
          </MyBoards>
          <MyLike onPress={props.onPressMyLike}>
            <ButtonImage
              source={require('../../../public/images/mylikeimage.png')}
            />
            <MyLikeText>좋아요!</MyLikeText>
          </MyLike>
          <ProfileUpdate onPress={() => navigation.navigate('프로필수정')}>
            <ButtonImage
              source={require('../../../public/images/defaultprofile2.png')}
            />
            <ProfileUpdateText>프로필수정</ProfileUpdateText>
          </ProfileUpdate>
        </ButtonView>
        {props.isBoards && <MyBoardsContainer data2={props.data2} />}
        {!props.isBoards && <MyLikeContainer data3={props.data3} />}
      </Wrapper>
    </ScrollView>
  );
};

export default MyPageMainUI;
