import React from 'react';
import {
  Wrapper,
  TitleImage,
  EmailView,
  EmailInput,
  EmailError,
  PassView,
  PassInput,
  PassError,
  LoginView,
  LoginText,
  SignUpView,
  SignUpText,
} from './SignIn.styles';
import { useNavigation } from '@react-navigation/native';

const SignInUI = (props: any) => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <TitleImage source={require('../../../public/images/logionlog.png')} />
      <EmailView>
        <EmailInput
          placeholder="이메일을 입력해주세요."
          onChangeText={props.changeEmail}></EmailInput>
        <EmailError>{props.emailError}</EmailError>
      </EmailView>
      <PassView>
        <PassInput
          placeholder="비밀번호를 입력해주세요."
          onChangeText={props.changePassword}></PassInput>
        <PassError>{props.passError}</PassError>
      </PassView>
      <LoginView>
        <LoginText onPress={props.onPressLogin}>로그인</LoginText>
      </LoginView>
      <SignUpView onPress={() => navigation.navigate('회원가입페이지')}>
        <SignUpText>회원가입</SignUpText>
      </SignUpView>
    </Wrapper>
  );
};

export default SignInUI;
