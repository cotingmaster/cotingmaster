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

const ProfilUpdateUI = (props: any) => {
  return (
    <Wrapper>
      <TopView>
        <MainTitle>프로필 수정</MainTitle>
        <Profile
          source={require('../../../../public/images/defaultprofile.png')}
        />
        <NickName>{props.data?.fetchUserLoggedIn.name}</NickName>
        <UpdateNickName
          onChangeText={props.setNick}
          placeholder="변경할 닉네임을 입력 하세요."
        />
      </TopView>
      <Submit onPress={props.onSubmit}>
        <SubmitText>등록하기</SubmitText>
      </Submit>
    </Wrapper>
  );
};

export default ProfilUpdateUI;
