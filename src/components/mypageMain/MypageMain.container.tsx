import { useQuery } from '@apollo/client';
import React from 'react';
import MyPageMainUI from './MypageMain.present';
import { FETCH_USER_LOGGEDIN } from './MypageMain.queries';

const MyPageMainContainer = () => {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  return <MyPageMainUI data={data} />;
};

export default MyPageMainContainer;
