import { useMutation, useQuery } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { Alert } from 'react-native';
import MyPageMainUI from './MypageMain.present';
import { FETCH_USER_LOGGEDIN } from './MypageMain.queries';
import { GlobalContext } from '../../../App';

const MyPageMainContainer = () => {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const { setUserInfo, setAccessToken } = useContext(GlobalContext);
  // const [logoutUser] = useMutation(LOGOUT_USER);

  const onPressLogout = () => {
    // try {
    //   logoutUser();
    // } catch (e: any) {
    //   Alert.alert(e.message);
    // }
    try {
      AsyncStorage.removeItem('user');
      setUserInfo({});
      setAccessToken('');
      Alert.alert('로그아웃 성공');
    } catch (error) {
      Alert.alert('error.message');
    }
  };

  return <MyPageMainUI data={data} onPressLogout={onPressLogout} />;
};

export default MyPageMainContainer;
