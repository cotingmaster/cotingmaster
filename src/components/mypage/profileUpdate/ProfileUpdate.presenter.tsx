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
  Message,
  SubmitText,
  ScrollViewStyle,
  KeyboardAvoidingViewStyle,
} from './ProfileUpdate.styles';

const ProfilUpdateUI = (props: any) => {
  return (
    <KeyboardAvoidingViewStyle
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollViewStyle>
        <Wrapper>
          <TopView>
            <MainTitle>프로필 수정</MainTitle>
            {/* <Profile
          source={require('../../../../public/images/defaultprofile.png')}
        /> */}
            <SetupProfile setPictureUrl={props.setPictureUrl} />
            <NickName>{props.data?.fetchUserLoggedIn.name}</NickName>
            <Message>변경할 닉네임을 입력하세요</Message>
            <UpdateNickName
              onChangeText={props.setNick}
              defaultValue={props.data?.fetchUserLoggedIn.name.split(' ')[0]}
            />
            <Message>기수 정보를 숫자만 입력해주세요 ex) 3</Message>
            <UpdateNickName
              keyboardType="numeric"
              onChangeText={props.setClassNumber}
              defaultValue={props.data?.fetchUserLoggedIn.name
                .split(' ')[1]
                .slice(0, -1)}
            />
          </TopView>
          <Submit onPress={props.onSubmit}>
            <SubmitText>등록하기</SubmitText>
          </Submit>
        </Wrapper>
      </ScrollViewStyle>
    </KeyboardAvoidingViewStyle>
  );
};

export default ProfilUpdateUI;
