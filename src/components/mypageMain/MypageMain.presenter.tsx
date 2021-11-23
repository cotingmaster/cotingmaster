import React from 'react';
import {
  ScrollView,
  Wrapper,
  ProfileDefault,
  PersonIcon,
  LogOutView,
  NickNameView,
  NickName,
  ButtonView,
  MyBoards,
  ProfileUpdate,
  ProfileWrapper,
  LogoutIcon,
  EditIcon,
  CurvedLine,
  MyText,
  MyIcon,
  HeartIcon,
  BoardWrapper,
  MyText2,
} from './MypageMain.styles';
import { useNavigation } from '@react-navigation/native';
import MyBoardsContainer from '../mypage/myboards/Myboards.container';
import MyLikeContainer from '../mypage/myLike/Mylike.container';

const MyPageMainUI = (props: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Wrapper>
        <ProfileWrapper>
          <ProfileUpdate onPress={() => navigation.navigate('프로필수정')}>
            {props.data?.fetchUserLoggedIn.picture ? (
              <ProfileDefault
                source={{ uri: props.data?.fetchUserLoggedIn.picture }}
              />
            ) : (
              <PersonIcon name="person-circle-outline" size={100} />
            )}
            <EditIcon name="edit" size={30} />
          </ProfileUpdate>

          <NickNameView>
            <NickName>{props.data?.fetchUserLoggedIn.name}기</NickName>
            <LogOutView onPress={props.onPressLogout}>
              <LogoutIcon name="logout" size={24} />
            </LogOutView>
          </NickNameView>
        </ProfileWrapper>

        <CurvedLine>
          <ButtonView>
            <MyBoards onPress={props.onPressMyBoards}>
              <MyIcon name="pencil" size={38} />
              <MyText>내가 쓴 글</MyText>
            </MyBoards>
            <MyText>|</MyText>
            <MyBoards onPress={props.onPressMyLike}>
              <HeartIcon name="heart-outline" size={24} />
              <MyText2>나의 좋아요</MyText2>
            </MyBoards>
          </ButtonView>
        </CurvedLine>

        <BoardWrapper>
          {props.isBoards && (
            <MyBoardsContainer
              data2={props.data2}
              refetch2={props.refetch2}
              isBoard={props.isBoard}
            />
          )}
          {!props.isBoards && (
            <MyLikeContainer
              data3={props.data3}
              refetch3={props.refetch3}
              isBoard={props.isBoard}
            />
          )}
        </BoardWrapper>
      </Wrapper>
    </ScrollView>
  );
};

export default MyPageMainUI;
