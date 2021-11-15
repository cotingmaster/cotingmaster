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
} from './meetingdetail.styles';
import { useNavigation } from '@react-navigation/native';

const MeetingDetailUI = ({ data }: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Wrapper>
        <MeetingMap></MeetingMap>
        <DtailBox>
          <UserBox>
            <UserInfo>
              <UserName>만남 게시판</UserName>
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

export default MeetingDetailUI;

{
  /* <Button1
        title="만남수정페이지가기"
        onPress={() => navigation.navigate('만남게시판수정')}
      /> */
}
{
  /* <ProfileView>
<ProfileImage
  source={require('../../../../public/images/defaultprofile2.png')}
/>
<ProfileRightView>
  <NickName>닉네임</NickName>
  <DateView>
    <Class>3기</Class>
    <Date>2021.11.10</Date>
  </DateView>
</ProfileRightView>
</ProfileView>
<Line></Line>
<Map></Map>
<MeetingDateView>
<MeetingDate>모임일자:</MeetingDate>
<MeetingDateData>2021.11.10</MeetingDateData>
</MeetingDateView>
<MeetingPlaceView>
<MeetingPlace>모임장소:</MeetingPlace>
<MeetingPlaceData>넥스트데이 패스트파이브</MeetingPlaceData>
</MeetingPlaceView>
<TitleView>
<Title>제목:</Title>
<TilteData>제목입니다</TilteData>
</TitleView>
<ContentsView>
<Contents>내용:</Contents>
<ContentsData>내용입니다</ContentsData>
</ContentsView> */
}

// import {
//   ProfileView,
//   ProfileImage,
//   ProfileRightView,
//   NickName,
//   DateView,
//   Class,
//   Date,
//   Line,
//   Map,
//   MeetingDateView,
//   MeetingDate,
//   MeetingDateData,
//   MeetingPlaceView,
//   MeetingPlace,
//   MeetingPlaceData,
//   TitleView,
//   Title,
//   TilteData,
//   ContentsView,
//   Contents,
//   ContentsData,
// } from './meetingdetail.styles';
