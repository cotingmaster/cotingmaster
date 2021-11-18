import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
  FETCH_USER_LOGGEDIN,
  UPDATE_USER,
  UPLOAD_FILE,
} from './ProfileUpdate.queries';
import ProfilUpdateUI from './ProfileUpdate.presenter';

const ProfileUpdateContainer = () => {
  const [nick, setNick] = useState('');
  const [updateUser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [classNumber, setClassNumber] = useState(
    data?.fetchUserLoggedIn.name.split(' ')[1],
  );
  const [response, setResponse] = useState(null);
  const [picture, setPicture] = useState('');
  const storage = 'https://storage.googleapis.com/';

  const onSubmit = async () => {
    console.log('업로드', response);
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name: `${nick} ${classNumber}기`,
            picture: storage + response?.assets[0]?.uri,
          },
        },
      });
      Alert.alert('업로드 성공', data?.fetchUserLoggedIn.picture);
      console.log(response);
    } catch (e: any) {
      Alert.alert(e.message);
    }
  };

  return (
    <ProfilUpdateUI
      data={data}
      setNick={setNick}
      onSubmit={onSubmit}
      setClassNumber={setClassNumber}
      response={response}
      setResponse={setResponse}
      setPicture={setPicture}
    />
  );
};

export default ProfileUpdateContainer;
