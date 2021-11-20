import { useMutation, useQuery } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import MyPageMainUI from './MypageMain.presenter';
import {
  FETCH_USER_LOGGEDIN,
  FETCH_USEDITEM_ISOLD,
  FETCH_USEDITEM_IPICKED,
} from './MypageMain.queries';
import { GlobalContext } from '../../../App';

const MyPageMainContainer = () => {
  const [isBoards, setIsBoards] = useState(true);
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  const { data: data2 } = useQuery(FETCH_USEDITEM_ISOLD, {
    variables: { page: 1 },
  });

  const { data: data3 } = useQuery(FETCH_USEDITEM_IPICKED, {
    variables: { search: '' },
  });

  const { setUserInfo, setAccessToken } = useContext(GlobalContext);

  function onPressMyBoards() {
    setIsBoards(true);
  }

  function onPressMyLike() {
    setIsBoards(false);
  }

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

  return (
    <MyPageMainUI
      data={data}
      data2={data2}
      data3={data3}
      onPressLogout={onPressLogout}
      isBoards={isBoards}
      onPressMyBoards={onPressMyBoards}
      onPressMyLike={onPressMyLike}
    />
  );
};

export default MyPageMainContainer;
