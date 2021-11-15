import * as React from 'react';
import SignUpUI from './SignUp.presenter';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { CREATE_USER } from './SignUp.queries';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SingUp() {
  // const [signup, setSignup] = useState(false);
  const [classNumber, setClassNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');

  const [createUser] = useMutation(CREATE_USER);
  const navigation = useNavigation();

  const onChangeClassNumber = e => {
    if (e) {
      setClassNumber(e.replace(/[^0-9]/g, ''));
    }
  };

  const onPressSubmit = async () => {
    if (!email || !password || !name || !classNumber) {
      return Alert.alert('가입정보를 모두 입력해주세요');
    }
    if (password !== password2) {
      return Alert.alert('비밀번호가 일치하지 않습니다');
    }

    const variables = {
      createUserInput: {
        email,
        password,
        name: `${name} ${classNumber}기`,
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
    <SignUpUI
      onChangeClassNumber={onChangeClassNumber}
      setEmail={setEmail}
      setName={setName}
      setPassword={setPassword}
      setPassword2={setPassword2}
      onPressSubmit={onPressSubmit}
    />
  );
}
