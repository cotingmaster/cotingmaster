import { formDataAppendFile } from 'apollo-upload-client';
import { valueFromAST } from 'graphql';
import * as React from 'react';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Wrapper,
  TitleImage,
  ClassView,
  ClassInput,
  ClassError,
  EmailView,
  EmailInput,
  EmailError,
  NameView,
  NameInput,
  NameError,
  PassView,
  PassInput,
  PassError,
  Pass2View,
  Pass2Input,
  Pass2Error,
  LoginView,
  LoginText,
  SafeAreaViewStyle,
  ScrollViewStyle,
  KeyboardAvoidingViewStyle,
} from './SignUp.styles';

export default function SignUpUI(props: any) {
  return (
    <SafeAreaProvider>
      <SafeAreaViewStyle edges={['bottom']}>
        <KeyboardAvoidingViewStyle
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollViewStyle>
            <Wrapper>
              <TitleImage
                source={require('../../../../public/images/logionlog.png')}
              />
              <ClassView>
                <ClassInput
                  placeholder="기수를 숫자만 입력해주세요. ex) 3"
                  onChangeText={props.setClassNumber}
                  keyboardType="numeric"
                />
                {/* <ClassError>기수를 확인해주세요.</ClassError> */}
              </ClassView>
              <EmailView>
                <EmailInput
                  placeholder="이메일을 입력해주세요."
                  onChangeText={props.setEmail}
                  autoCompleteType="email"
                  keyboardType="email-address"
                />
                {/* <EmailError>이메일을 확인해주세요.</EmailError> */}
              </EmailView>
              <NameView>
                <NameInput
                  placeholder="이름을 입력해주세요."
                  onChangeText={props.setName}></NameInput>
                {/* <NameError>이름을 확인해주세요.</NameError> */}
              </NameView>
              <PassView>
                <PassInput
                  placeholder="비밀번호를 입력해주세요."
                  onChangeText={props.setPassword}
                  secureTextEntry
                />
                {/* <PassError>비밀번호를 확인해주세요.</PassError> */}
              </PassView>
              <Pass2View>
                <Pass2Input
                  placeholder="비밀번호확인"
                  secureTextEntry
                  onChangeText={props.setPassword2}></Pass2Input>
                {/* <Pass2Error>비밀번호를 확인해주세요.</Pass2Error> */}
              </Pass2View>
              <LoginView onPress={props.onPressSubmit}>
                <LoginText>회원가입</LoginText>
              </LoginView>
            </Wrapper>
          </ScrollViewStyle>
        </KeyboardAvoidingViewStyle>
      </SafeAreaViewStyle>
    </SafeAreaProvider>
  );
}

{
  /* <S.Container>
      <S.LineBox>
        <S.ShowText>이메일</S.ShowText>
        <S.InputLine testID="email" onChangeText={props.changeEmail} />
      </S.LineBox>
      <S.LineBox>
        <S.ShowText>비밀번호</S.ShowText>
        <S.InputLine testID="password" onChangeText={props.changePassword} />
      </S.LineBox>
      <S.LineBox>
        <S.ShowText>이름</S.ShowText>
        <S.InputLine testID="name" onChangeText={props.changeName} />
      </S.LineBox>
      <S.SubmitButton onPress={props.onPressSubmit} title="회원 가입" />
    </S.Container> */
}
