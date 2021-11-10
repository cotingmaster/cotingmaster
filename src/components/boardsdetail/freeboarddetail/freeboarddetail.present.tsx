import React from 'react';
import {
  Wrapper,
  Button1,
  UserInfoBox,
  UserInfo,
  UserImage,
  UserNickname,
  ClassNumberDate,
  UserClassNumber,
  RegistrationDate,
  Contents,
  Line,
  ContentsImage,
} from './freeboarddetail.styles';
import { useNavigation } from '@react-navigation/native';

const FreeBoardDetailUI = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      {/* <MainText>여기는 커뮤니티디테일페이지입니다</MainText> */}
      <UserInfoBox>
        <UserImage></UserImage>
        <UserInfo>
          <UserNickname>닉네임</UserNickname>
          <ClassNumberDate>
            <UserClassNumber>3기</UserClassNumber>
            <RegistrationDate>2021.11.11</RegistrationDate>
          </ClassNumberDate>
        </UserInfo>
      </UserInfoBox>
      <Line />
      <Contents></Contents>
      <ContentsImage></ContentsImage>
    </Wrapper>
  );
};

export default FreeBoardDetailUI;

{
  /* <Button1
        title="커뮤니티수정페이지가기"
        onPress={() => navigation.navigate('커뮤니티게시판수정')}
      /> */
}
