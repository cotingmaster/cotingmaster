import React, { useState } from 'react';
import MeetingWriteUI from './MeetingWrite.present';
import firestore from '@react-native-firebase/firestore';
import { useQuery } from '@apollo/client';
import { FETCH_USER_LOGGEDIN } from '../../signin/SignIn.queries';
import { useNavigation } from '@react-navigation/native';

const MeetingWriteContainer = () => {
  const navigation = useNavigation();
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [meetingdate, setMeetingDate] = useState('');
  const [meetingAddress, setMeetingAddress] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const onPressMeetingSubmit = () => {
    // const user = data?.fetchUserLoggedIn;
    const user_id = data?.fetchUserLoggedIn._id;
    console.log(data?.fetchUserLoggedIn._id);

    firestore()
      .collection('Users')
      .doc(data?.fetchUserLoggedIn._id)
      .collection('MeetingBoard')
      .doc()
      .set({
        meetingdate,
        meetingAddress,
        title,
        contents,
        createdAt: new Date(),
        tag: 'MeetingBoard',
      });

    navigation.navigate('만남게시판디테일');
  };

  return (
    <MeetingWriteUI
      onPressMeetingSubmit={onPressMeetingSubmit}
      setMeetingDate={setMeetingDate}
      setMeetingAddress={setMeetingAddress}
      setTitle={setTitle}
      setContents={setContents}
    />
  );
};

export default MeetingWriteContainer;
