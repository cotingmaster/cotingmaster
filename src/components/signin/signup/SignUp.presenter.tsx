import * as React from 'react';
import { S } from './SignUp.styles';

export default function SignUpUI(props: any) {
  return (
    <S.Container>
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
    </S.Container>
  );
}
