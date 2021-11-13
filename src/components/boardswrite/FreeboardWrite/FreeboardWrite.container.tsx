import React, { useState } from 'react';
import FreeBoardWriteUI from './FreeboardWrite.present';
import firestore from '@react-native-firebase/firestore';
import { useQuery } from '@apollo/client';
import { FETCH_USER_LOGGEDIN } from '../../signin/SignIn.queries';
import { useNavigation } from '@react-navigation/native';

const FreeBoardWriteContainer = () => {
  const navigation = useNavigation();
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [images, setImage] = useState([]);

  const onClickFreeBoardSubmit = () => {
    const user_id = data?.fetchUserLoggedIn._id;
    console.log(data?.fetchUserLoggedIn._id);

    firestore()
      .collection('Users')
      .doc(data?.fetchUserLoggedIn._id)
      .collection('FreeBoard')
      .doc()
      .set({
        title,
        contents,
        createdAt: new Date(),
        tag: 'FreeBoard',
      });
    navigation.navigate('커뮤니티게시판디테일');
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
