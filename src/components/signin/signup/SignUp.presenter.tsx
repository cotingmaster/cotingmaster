import * as React from 'react';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { S } from './SignUp.styles';
import { CREATE_USER } from './SignUp.queries';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function SignUpUI() {
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [createUser] = useMutation(CREATE_USER);
  const navigation = useNavigation();

  const changeEmail = (e: any) => {
    setEmail(e);
  };
  const changePassword = (e: any) => {
    setPassword(e);
  };
  const changeName = (e: any) => {
    setName(e);
  };
  const onPressSubmit = async () => {
    const variables = {
      createUserInput: {
        email,
        password,
        name,
      },
    };

    try {
      const { data } = await createUser({ variables });
      console.log(data?.createUser._id);
      Alert.alert(
        `${data?.createUser.name}님 가입성공! 가입하신 정보로 로그인을 해주세요`,
      );
      navigation.navigate('로그인페이지');
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <S.Container>
      <S.LineBox>
        <S.ShowText>이메일</S.ShowText>
        <S.InputLine testID="email" onChangeText={changeEmail} />
      </S.LineBox>
      <S.LineBox>
        <S.ShowText>비밀번호</S.ShowText>
        <S.InputLine testID="password" onChangeText={changePassword} />
      </S.LineBox>
      <S.LineBox>
        <S.ShowText>이름</S.ShowText>
        <S.InputLine testID="name" onChangeText={changeName} />
      </S.LineBox>
      <S.SubmitButton onPress={onPressSubmit} title="회원 가입" />
    </S.Container>
  );
}
