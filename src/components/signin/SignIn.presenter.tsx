import React from 'react';
import { S } from './SignIn.styles';
import { useNavigation } from '@react-navigation/native';

const SignInUI = (props: any) => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.LogoBackground>
        <S.Logo source={require('../../../public/images/coting.png')} />
      </S.LogoBackground>
      <S.InputLine
        placeholder={'코드캠프 수강시 등록했던 이메일을 입력해주세요'}
        onChangeText={props.changeEmail}
      />
      <S.InputLine
        placeholder={'비밀번호를 입력해주세요'}
        onChangeText={props.changePassword}
      />
      <S.PressSubmit onPress={props.onPressLogin}>
        <S.ShowText>로그인</S.ShowText>
      </S.PressSubmit>
      <S.PressSubmit onPress={() => navigation.navigate('회원가입페이지')}>
        <S.ShowText>회원 가입</S.ShowText>
      </S.PressSubmit>
    </S.Container>
  );
};

export default SignInUI;
