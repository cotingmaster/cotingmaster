import React from 'react';
import SetupProfile from '../../../commons/profilePhoto';
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
        {/* <Profile
          source={require('../../../../public/images/defaultprofile.png')}
        /> */}
        <SetupProfile
          setResponse={props.setResponse}
          response={props.response}
        />
        <NickName>{props.data?.fetchUserLoggedIn.name}</NickName>
        <UpdateNickName
          onChangeText={props.setNick}
          placeholder="변경할 닉네임을 입력하세요."
        />
        <UpdateNickName
          onChangeText={props.setClassNumber}
          placeholder="기수 정보를 숫자만 입력해주세요 ex) 3"
        />
      </TopView>
      <Submit onPress={props.onSubmit}>
        <SubmitText>등록하기</SubmitText>
      </Submit>
    </Wrapper>
  );
};

export default ProfilUpdateUI;
