import React, { useContext, useState } from 'react';
import SignInUI from './SignIn.presenter';
import { useNavigation } from '@react-navigation/native';
import { LOGIN_USER } from './SignIn.queries';
import { useMutation, useQuery } from '@apollo/client';
import { GlobalContext } from '../../../App';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInContainer = () => {
  const { setAccessToken } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const navigation = useNavigation();
  const [loginUser] = useMutation(LOGIN_USER);

  const onPressLogin = async () => {
    if (email === '') {
      setEmailError('이메일을 확인해주세요');
      return;
    }

    if (password === '') {
      setPassError('비밀번호를 확인해주세요');
      return;
    }

    try {
      const variables = {
        email,
        password,
      };

      const { data } = await loginUser({ variables });
      AsyncStorage.setItem('user', data.loginUser.accessToken);
      setAccessToken(data.loginUser.accessToken);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <SignInUI
      setEmail={setEmail}
      setPassword={setPassword}
      onPressLogin={onPressLogin}
      emailError={emailError}
      passError={passError}
    />
  );
};

export default SignInContainer;
