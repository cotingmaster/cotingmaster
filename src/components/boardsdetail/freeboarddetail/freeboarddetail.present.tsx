import React from 'react';
import {
  ScrollView,
  Wrapper,
  MeetingMap,
  DtailBox,
  UserBox,
  UserInfo,
  UserName,
  ClassNumberDate,
  ClassNumber,
  Date,
  Like,
  Title,
  Contents,
} from './freeboarddetail.styles';
import { useNavigation } from '@react-navigation/native';

const FreeBoardDetailUI = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Wrapper>
        <MeetingMap></MeetingMap>
        <DtailBox>
          <UserBox>
            <UserInfo>
              <UserName>닉네임</UserName>
              <ClassNumberDate>
                <ClassNumber>3기</ClassNumber>
                <Date>2021.11.12</Date>
              </ClassNumberDate>
            </UserInfo>
            <Like>♥</Like>
          </UserBox>
          <Title>제목입니다</Title>
          <Contents>
            내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다
            내용입니다내용입니다내용입니다내용입니다
            내용입니다내용입니다내용입니다
          </Contents>
        </DtailBox>
      </Wrapper>
    </ScrollView>
  );
};

export default FreeBoardDetailUI;

{
  /* <Button1
        title="커뮤니티수정페이지가기"
        onPress={() => navigation.navigate('커뮤니티게시판수정')}
      /> */
}
