import * as React from 'react';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { S } from './SignUp.styles';
import { CREATE_USER } from './SignUp.queries';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { GlobalContext } from '../../../../App';

export default function SignUpUI() {
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [createUser] = useMutation(CREATE_USER);
  const { setAccessToken } = React.useContext(GlobalContext);

  const changeEmail = e => {
    setEmail(e);
    console.log(e);
  };
  const changePassword = e => {
    setPassword(e);
  };
  const changeName = e => {
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
      Alert.alert(`가입성공! ${data?.createUser.name}님 환영합니다`);
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
