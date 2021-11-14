import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { FETCH_USER_LOGGEDIN, UPDATE_USER } from './Profile.Update.queries';
import ProfilUpdateUI from './ProfileUpdate.present';

const ProfileUpdateContainer = () => {
  const [nick, setNick] = useState('');
  const [updateUser] = useMutation(UPDATE_USER);
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  const onSubmit = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name: nick,
            picture: null,
          },
        },
      });
    } catch (e: any) {
      Alert.alert(e.message);
    }
  };

  return <ProfilUpdateUI data={data} setNick={setNick} onSubmit={onSubmit} />;
};

export default ProfileUpdateContainer;
