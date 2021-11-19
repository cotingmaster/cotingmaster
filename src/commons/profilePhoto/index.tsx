import React, { useRef, useState } from 'react';
import { S } from './profilePhoto.style';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Platform } from 'react-native';

export default function SetupProfile(props) {
  const [response, setResponse] = useState(null);

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 70,
        maxHeight: 70,
        includeBase64: Platform.OS === 'android',
      },
      res => {
        if (res.didCancel) {
          return;
        }
        setResponse(res);
        props.setPictureUrl(res?.assets[0].uri);
      },
    );
  };
  console.log('default', props.data?.fetchUserLoggedIn.picture);

  return (
    <S.Container>
      <S.Pressable onPress={onSelectImage}>
        <S.Image
          source={
            response
              ? { uri: response?.assets[0]?.uri }
              : props.data?.fetchUserLoggedIn.picture
              ? { uri: props.data?.fetchUserLoggedIn.picture }
              : require('../../../public/images/defaultprofile.png')
          }
        />
        <S.Ionicons name="ios-camera" size={30} />
      </S.Pressable>
    </S.Container>
  );
}
