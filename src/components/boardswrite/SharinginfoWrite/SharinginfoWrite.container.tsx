import React from 'react';
import SharingInfoWriteUI from './SharinginfoWrite.present';
import { useNavigation } from '@react-navigation/native';

const SharingInfoWriteContainer = () => {
  const navigation = useNavigation();

  const onClickSubmit = () => {
    navigation.navigate('정보공유게시판디테일');
  };

  return <SharingInfoWriteUI onClickSubmit={onClickSubmit} />;
};

export default SharingInfoWriteContainer;
