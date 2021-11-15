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
} from './sharinginfodetail.styles';
import { useNavigation } from '@react-navigation/native';

const SharingInfodDetailUI = ({ data }: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Wrapper>
        <MeetingMap></MeetingMap>
        <DtailBox>
          <UserBox>
            <UserInfo>
              <UserName>정보공유 게시판</UserName>
              <UserName>{data?.fetchUseditem.seller.name}</UserName>
              <ClassNumberDate>
                <ClassNumber>
                  {data?.fetchUseditem.seller.name.split(' ')[1]}
                </ClassNumber>
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

export default SharingInfodDetailUI;

{
  /* <Button1
        title="정보공유수정페이지가기"
        onPress={() => navigation.navigate('정보공유게시판수정')}
      /> */
}
