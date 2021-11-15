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

const FreeBoardDetailUI = ({ data }: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Wrapper>
        <MeetingMap></MeetingMap>
        <DtailBox>
          <UserBox>
            <UserInfo>
              <UserName>커뮤니티 게시판</UserName>
              <UserName>{data?.fetchUseditem.seller.name}</UserName>
              <ClassNumberDate>
                <ClassNumber>3기</ClassNumber>
                <Date>{data?.fetchUseditem.createdAt.slice(0, 10)}</Date>
              </ClassNumberDate>
            </UserInfo>
            <Like>♥</Like>
          </UserBox>
          <Title>{data?.fetchUseditem.name}</Title>
          <Contents>{data?.fetchUseditem.contents}</Contents>
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
