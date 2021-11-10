import React from 'react';
import { useState } from 'react';
import FreeBoardWriteUI from './FreeboardWrite.present';
import firestore from '@react-native-firebase/firestore';

const FreeBoardWriteContainer = () => {
  const [contents, setCountents] = useState('');

  const onClickFreeBoardSubmit = () => {
    firestore().collection('FreeBoard').add({
      contents,
      createdAt: Date.now(),
    });
  };

  return (
    <FreeBoardWriteUI
      onClickFreeBoardSubmit={onClickFreeBoardSubmit}
      setCountents={setCountents}
    />
  );
};

export default FreeBoardWriteContainer;
