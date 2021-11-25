import styled from '@emotion/native';
import IIcon from 'react-native-vector-icons/Ionicons';

export const S = {
  Container: styled.View`
    width: 100px;
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

  Image: styled.Image`
    margin-left: 10px;
    width: 70px;
    height: 70px;
    border-radius: 35px;
  `,
  Ionicons: styled(IIcon)`
    position: absolute;
    right: 12px;
    bottom: 30px;
    color: #777777;
  `,

  PersonIcon: styled(IIcon)`
    color: gray;
  `,
};
