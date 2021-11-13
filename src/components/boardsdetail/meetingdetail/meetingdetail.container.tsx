import React, { useEffect } from 'react';
import MeetingDetailUI from './meetingdetail.present';
import firestore from '@react-native-firebase/firestore';
import { useQuery } from '@apollo/client';
import { FETCH_USER_LOGGEDIN } from '../../signin/SignIn.queries';

const MeetingDetailContainer = () => {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  console.log(data?.fetchUserLoggedIn.name);
  // const name = data?.fetchUserLoggedIn.name;

  // useEffect(()=>{
  const userData = firestore()
    .collection('User')
    .doc(data?.fetchUserLoggedIn._id)
    .collection('MeetingBoard')
    .doc('8VuC69c10AKEdTr70rqs');
  // .data();

  // },[])

  return <MeetingDetailUI data={data} userData={userData} />;
};

export default MeetingDetailContainer;
