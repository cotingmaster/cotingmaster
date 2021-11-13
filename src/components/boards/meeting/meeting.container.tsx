import React from 'react';
import MeetingUI from './meeting.present';
import firestore from '@react-native-firebase/firestore';
import { useQuery } from '@apollo/client';
import { FETCH_USER_LOGGEDIN } from '../../signin/SignIn.queries';

const MeetingContainer = () => {
  // const { data } = useQuery(FETCH_USER_LOGGEDIN);
  // console.log(data.fetchUserLoggedIn.name);

  // const userData = firestore()
  //   .collection('User')
  //   .doc(data?.fetchUserLoggedIn._id)
  //   .collection('MeetingBoard')
  //   .get();
  return <MeetingUI />;
  // data={data} userData={userData}
};

export default MeetingContainer;
