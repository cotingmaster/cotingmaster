import React from 'react';
import { Platform } from 'react-native';
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
      <Wrapper>
        <TopView>
          <MainTitle>프로필 수정</MainTitle>
          {/* <Profile
          source={require('../../../../public/images/defaultprofile.png')}
        /> */}
          <SetupProfile setPictureUrl={props.setPictureUrl} data={props.data} />
          <NickName>{props.data?.fetchUserLoggedIn.name}기</NickName>
          <Message>변경할 닉네임을 입력하세요</Message>
          <UpdateNickName
            onChangeText={props.setNick}
            defaultValue={props.data?.fetchUserLoggedIn.name.split(' ')[0]}
          />
          <Message>기수 정보를 숫자만 입력해주세요 ex) 3</Message>
          <UpdateNickName
            keyboardType="numeric"
            onChangeText={props.setClassNumber}
            defaultValue={props.data?.fetchUserLoggedIn.name.split(' ')[1]}
          />
        </TopView>
        <Submit onPress={props.onSubmit}>
          <SubmitText>등록하기</SubmitText>
        </Submit>
      </Wrapper>
    </KeyboardAvoidingViewStyle>
  );
};

export default ProfilUpdateUI;
