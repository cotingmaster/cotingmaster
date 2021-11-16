import React, { useState } from 'react';
import { S } from './profilePhoto.style';
import { launchImageLibrary } from 'react-native-image-picker';
import { Platform } from 'react-native';

export default function SetupProfile(props) {
  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 50,
        maxHeight: 50,
        includeBase64: Platform.OS === 'android',
      },
      res => {
        if (res.didCancel) {
          return;
        }
        console.log(res);
        props.setResponse(res);
      },
    );
  };
  return (
    <S.Container>
      <S.Pressable onPress={onSelectImage}>
        <S.Image
          source={
            props.response
              ? { uri: props.response?.assets[0]?.uri }
              : require('../../../public/images/defaultprofile.png')
          }
        />
      </S.Pressable>
    </S.Container>
  );
}
