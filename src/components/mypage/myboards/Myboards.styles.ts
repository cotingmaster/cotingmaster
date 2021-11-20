import styled from '@emotion/native';
import EIcon from 'react-native-vector-icons/EvilIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

export const S = {
  BoardContainer: styled.View``,

  Box: styled.TouchableOpacity`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 360px;
    height: 140px;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    elevation: 4;
    padding: 10px;
    margin-bottom: 10px;
    justify-content: flex-start;
    align-items: center;
  `,

  MySticker: styled(EIcon)`
    position: absolute;
    top: 11px;
    right: 50px;
    z-index: 4;
    width: 30px;
    height: 34px;
    text-align: center;
    color: #9ae9ff;
    padding: 2px;
    background-color: white;
    border: 1px solid #9ae9ff;
    border-radius: 7px;
    border-bottom-color: #9ae9ff;
    border-bottom-width: 3px;
  `,

  HeartSticker: styled(IIcon)`
    position: absolute;
    top: 11px;
    right: 50px;
    z-index: 4;
    text-align: center;
    color: #febcff;
    padding: 2px;
    background-color: white;
    border: 1px solid #ffd8f3;
    border-radius: 7px;
    border-bottom-color: #ca8bcc;
    border-bottom-width: 2px;
  `,

  BoardTitle: styled(IIcon)`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 4;
    text-align: center;
    color: #ffd600;
    padding: 2px;
    background-color: white;
    border: 1px solid #ffd600;
    border-radius: 7px;
    border-bottom-color: #c7a500;
    border-bottom-width: 2px;
  `,

  BoardPhoto: styled.Image`
    width: 60px;
    height: 60px;
    margin-left: 5px;
    margin-right: 10px;
  `,

  DefaultImage: styled(EIcon)`
    color: #e4e4e4;
  `,

  ContentsWrapper: styled.View`
    display: flex;
  `,

  Tilte: styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin-bottom: 5px;
  `,

  Contents: styled.Text`
    width: 270px;
    color: black;
    /* border: solid 1px black; */
    margin-bottom: 10px;
  `,

  BottomView: styled.View`
    display: flex;
    flex-direction: row;
  `,

  Date: styled.Text`
    color: black;
    margin-right: 10px;
  `,

  NickName2: styled.Text`
    color: black;
  `,
};
