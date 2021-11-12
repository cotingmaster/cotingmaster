import React from 'react';
import { S } from './SignIn.styles';
import { useNavigation } from '@react-navigation/native';

const SignInUI = props => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.LineBox>
        <S.ShowText>이메일</S.ShowText>
        <S.InputLine onChangeText={props.changeEmail} />
      </S.LineBox>
      <S.LineBox>
        <S.ShowText>비밀번호</S.ShowText>
        <S.InputLine onChangeText={props.changePassword} />
      </S.LineBox>
      <S.SubmitButton title="로그인" onPress={props.onPressLogin} />
      <S.SubmitButton
        title="회원 가입"
        onPress={() => navigation.navigate('회원가입페이지')}
      />
    </S.Container>
  );
};

export default SignInUI;