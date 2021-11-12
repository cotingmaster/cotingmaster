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
  const navigation = useNavigation();
  const [loginUser] = useMutation(LOGIN_USER);

  const changeEmail = (e: any) => {
    setEmail(e);
  };

  const changePassword = (e: any) => {
    setPassword(e);
  };

  const onPressLogin = async () => {
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
      changeEmail={changeEmail}
      changePassword={changePassword}
      onPressLogin={onPressLogin}
    />
  );
};

export default SignInContainer;
