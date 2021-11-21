import styled from '@emotion/native';
import MIcon from 'react-native-vector-icons/MaterialIcons';

export const S = {
  ModalContainer: styled.Modal``,

  PressWrapper: styled.Pressable`
    background-color: rgba(0, 0, 0, 0.6);
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
  WhiteBox: styled.View`
    width: 300px;
    background-color: white;
    border-radius: 4px;
    elevation: 2;
  `,

  ActionButton: styled.Pressable`
    padding: 16px;
    flex-direction: row;
    align-items: center;
  `,
  Icon: styled(MIcon)`
    margin-right: 8px;
  `,
  Text: styled.Text`
    font-size: 16px;
  `,
};
