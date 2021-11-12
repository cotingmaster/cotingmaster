import React from 'react';
import { useState } from 'react';
import FreeBoardWriteUI from './FreeboardWrite.present';
import firestore from '@react-native-firebase/firestore';
import { useQuery } from '@apollo/client';
import { FETCH_USER_LOGGEDIN } from '../../signin/SignIn.queries';

const FreeBoardWriteContainer = () => {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [images, setImage] = useState([]);

  const onClickFreeBoardSubmit = () => {
    const user = data?.fetchUserLoggedIn;

    firestore().collection('FreeBoard').add({
      title,
      contents,
      images,
      user,
      createdAt: new Date(),
      tag: 'FreeBoard',
    });
  };

  return (
    <FreeBoardWriteUI
      onClickFreeBoardSubmit={onClickFreeBoardSubmit}
      setTitle={setTitle}
      setContents={setContents}
      setImage={setImage}
    />
  );
};

export default FreeBoardWriteContainer;
