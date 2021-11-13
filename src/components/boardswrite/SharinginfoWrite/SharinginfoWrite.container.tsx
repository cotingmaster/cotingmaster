import React, { useState } from 'react';
import SharingInfoWriteUI from './SharinginfoWrite.present';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { useQuery } from '@apollo/client';
import { FETCH_USER_LOGGEDIN } from '../../signin/SignIn.queries';

const SharingInfoWriteContainer = () => {
  const navigation = useNavigation();
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const onPressSharingSubmit = () => {
    const user_id = data?.fetchUserLoggedIn._id;
    console.log(data?.fetchUserLoggedIn._id);

    firestore()
      .collection('Users')
      .doc(data?.fetchUserLoggedIn._id)
      .collection('SharingBoard')
      .doc()
      .set({
        title,
        contents,
        createdAt: new Date(),
        tag: 'SharingBoard',
      });
    navigation.navigate('정보공유게시판디테일');
  };

  return (
    <SharingInfoWriteUI
      onPressSharingSubmit={onPressSharingSubmit}
      setTitle={setTitle}
      setContents={setContents}
    />
  );
};

export default SharingInfoWriteContainer;
