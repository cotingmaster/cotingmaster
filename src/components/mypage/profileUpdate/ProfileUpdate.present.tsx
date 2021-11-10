import React from 'react';
import {
  Wrapper,
  TopView,
  MainTitle,
  Profile,
  NickName,
  UpdateNickName,
  Submit,
  SubmitText,
} from './ProfileUpdate.styles';

const ProfilUpdateUI = () => {
  return (
    <Wrapper>
      <TopView>
        <MainTitle>프로필 수정</MainTitle>
        <Profile
          source={require('../../../../public/images/defaultprofile.png')}
        />
        <NickName>코딩싫어</NickName>
        <UpdateNickName placeholder="변경할 닉네임을 입력 하세요."></UpdateNickName>
      </TopView>
      <Submit>
        <SubmitText>등록하기</SubmitText>
      </Submit>
    </Wrapper>
  );
};

export default ProfilUpdateUI;
