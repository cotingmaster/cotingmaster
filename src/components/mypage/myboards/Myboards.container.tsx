// import { useQuery } from '@apollo/client';
import React from 'react';
import MyBoardsUI from './Myboards.present';
// import { FETCH_USEDITEM_ISOLD } from './Myboards.queries';

const MyBoardsContainer = () => {
  // const { data } = useQuery(FETCH_USEDITEM_ISOLD, {
  //   variables: { page: 1 },
  // });

  return <MyBoardsUI />;
};

export default MyBoardsContainer;
