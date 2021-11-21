import React from 'react';
import { S } from './cameraModal.styles';

export default function CameraModal({
  visible,
  onClose,
  onLaunchCamera,
  onLaunchImageLibrary,
}: any) {
  return (
    <S.ModalContainer
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <S.PressWrapper onPress={onClose}>
        <S.WhiteBox>
          <S.ActionButton
            android_ripple={{ color: '#eee' }}
            onPress={() => {
              onLaunchCamera();
              onClose();
            }}>
            <S.Icon name="camera-alt" color="#757575" size={24} />
            <S.Text>카메라로 촬영하기</S.Text>
          </S.ActionButton>
          <S.ActionButton
            android_ripple={{ color: '#eee' }}
            onPress={() => {
              onLaunchImageLibrary();
              onClose();
            }}>
            <S.Icon name="photo" color="#757575" size={24} />
            <S.Text>사진 선택하기</S.Text>
          </S.ActionButton>
        </S.WhiteBox>
      </S.PressWrapper>
    </S.ModalContainer>
  );
}
