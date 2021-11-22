import React, { useState } from 'react';
import { S } from './uploadPhotos.style';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import CameraModal from '../cameraModal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

export default function UploadPhotos(props) {
  const [response, setResponse] = useState(null);

  const imagePickerOption = {
    mediaType: 'photo',
    maxWidth: 768,
    maxHeight: 768,
    includeBase64: Platform.OS === 'android',
    selectionLimit: 0,
  };

  const TABBAR_HEIGHT = 49;
  const insets = useSafeAreaInsets();
  const bottom = Platform.select({
    android: TABBAR_HEIGHT / 2,
    ios: TABBAR_HEIGHT / 2 + insets.bottom - 4,
  });

  const onPickImage = res => {
    if (res.didCancel || !res) return;
    setResponse(res);
    const urls = res?.assets.map(el => el.uri);
    props.setImages(urls);
  };

  const onLaunchCamera = () => {
    launchCamera(imagePickerOption, onPickImage);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
  };

  return (
    <S.ScrollView>
      <S.Container>
        <CameraModal
          visible={props.visible}
          onClose={() => props.setVisible(false)}
          onLaunchCamera={onLaunchCamera}
          onLaunchImageLibrary={onLaunchImageLibrary}
        />

        <S.Pressable onPress={onPickImage}>
          <S.ImageWrapper>
            {response?.assets.map(el => (
              <S.Image key={el.fileName} source={{ uri: el.uri }} />
            ))}
          </S.ImageWrapper>
        </S.Pressable>
      </S.Container>
    </S.ScrollView>
  );
}
