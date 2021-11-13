import React from 'react';
import {
  Wrapper,
  Button1,
  ProfileView,
  ProfileImage,
  ProfileRightView,
  NickName,
  DateView,
  Class,
  Date,
  Line,
  Title,
  Contents,
  Image,
} from './sharinginfodetail.styles';
import { useNavigation } from '@react-navigation/native';

const SharingInfodDetailUI = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <ProfileView>
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
      <Title>제목</Title>
      <Contents>
        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
      </Contents>
      <Image></Image>
    </Wrapper>
  );
};

export default SharingInfodDetailUI;

{
  /* <Button1
        title="정보공유수정페이지가기"
        onPress={() => navigation.navigate('정보공유게시판수정')}
      /> */
}
