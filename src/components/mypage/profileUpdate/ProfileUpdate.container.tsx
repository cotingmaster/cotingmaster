import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
  FETCH_USER_LOGGEDIN,
  UPDATE_USER,
  UPLOAD_FILE,
} from './ProfileUpdate.queries';
import ProfilUpdateUI from './ProfileUpdate.presenter';
import { useNavigation } from '@react-navigation/native';

const ProfileUpdateContainer = () => {
  const navigation = useNavigation();
  const [nick, setNick] = useState('');
  const [updateUser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [classNumber, setClassNumber] = useState(
    data?.fetchUserLoggedIn.name.split(' ')[1],
  );
  const [pictureUrl, setPictureUrl] = useState(null);
  const storage = 'https://storage.googleapis.com/';

  const onSubmit = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name: `${nick || data?.fetchUserLoggedIn.name.split(' ')[0]} ${
              classNumber || data?.fetchUserLoggedIn.name.split(' ')[1]
            }`,
            // picture: storage + response?.assets[0]?.uri,
            picture:
              pictureUrl ||
              data?.fetchUserLoggedIn.picture ||
              'https://photo.jtbc.joins.com/news/2021/03/26/202103261532034842.jpg',
          },
        },
      });
      Alert.alert('업로드 성공', data?.fetchUserLoggedIn.picture);
      navigation.navigate('메인');
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
      setPictureUrl={setPictureUrl}
    />
  );
};

export default ProfileUpdateContainer;
