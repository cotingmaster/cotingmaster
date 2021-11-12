import React from 'react';
import FreeBoardDetailUI from './freeboarddetail.present';
import firestore from '@react-native-firebase/firestore';

const FreeBoardDetailContainer = () => {
  firestore().collection('Boards').get();

  return <FreeBoardDetailUI />;
};

export default FreeBoardDetailContainer;
