import styled from '@emotion/native';
import IIcon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';

export const S = {
  Wrapper: styled.View`
    elevation: 2;
    /* width: 200px; */
    margin-left: 20px;
    padding-top: 5px;
    /* border-right-width: 0.2; */
  `,

  PickerContainer: styled(Picker)`
    width: 120px;
    elevation: 2;
    color: black;
    justify-content: center;
  `,

  BoardTitle: styled(IIcon)`
    font-size: 30px;
    color: #ffd600;
    padding: 2px;
  `,

  PickerItem: styled(Picker.Item)`
    font-family: 'GamjaFlower-Regular';
  `,
};
