import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
  SafeAreaViewStyle,
  ScrollViewStyle,
  KeyboardAvoidingViewStyle,
} from './SignIn.styles';
import { useNavigation } from '@react-navigation/native';

const SignInUI = (props: any) => {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaViewStyle edges={['bottom']}>
        <KeyboardAvoidingViewStyle>
          <ScrollViewStyle>
            <Wrapper>
              <TitleImage
                source={require('../../../public/images/logionlog.png')}
              />
              <EmailView>
                <EmailInput
                  placeholder="이메일을 입력해주세요."
                  autoCompleteType="email"
                  keyboardType="email-address"
                  onChangeText={props.setEmail}></EmailInput>
                <EmailError>{props.emailError}</EmailError>
              </EmailView>
              <PassView>
                <PassInput
                  placeholder="비밀번호를 입력해주세요."
                  secureTextEntry
                  onChangeText={props.setPassword}></PassInput>
                <PassError>{props.passError}</PassError>
              </PassView>
              <LoginView>
                <LoginText onPress={props.onPressLogin}>로그인</LoginText>
              </LoginView>
              <SignUpView onPress={() => navigation.navigate('회원가입페이지')}>
                <SignUpText>회원가입</SignUpText>
              </SignUpView>
            </Wrapper>
          </ScrollViewStyle>
        </KeyboardAvoidingViewStyle>
      </SafeAreaViewStyle>
    </SafeAreaProvider>
  );
};

export default SignInUI;
