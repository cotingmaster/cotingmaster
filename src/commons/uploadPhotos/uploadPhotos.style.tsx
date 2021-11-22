import styled from '@emotion/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

export const S = {
  ScrollView: styled.ScrollView``,

  Container: styled.View`
    width: 360px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Pressable: styled.Pressable`
    width: 100%;
    height: 100%;
    position: relative;
  `,

  ImageWrapper: styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
  `,

  Image: styled.Image`
    margin: 5px;
    width: 80px;
    height: 80px;
  `,

  Ionicons: styled(Ionicons)`
    position: absolute;
    right: 12px;
    bottom: 30px;
    color: #777777;
  `,
  PhotoAdd: styled(MIcon)`
    color: #ffd600;
    margin-left: 15px;
  `,
};
