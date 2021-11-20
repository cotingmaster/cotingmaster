import styled from '@emotion/native';
import EIcon from 'react-native-vector-icons/EvilIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

export const S = {
  BoardContainer: styled.View``,

  PinkLine: styled.View`
    border: 2px solid pink;
  `,

  YellowLine: styled.View`
    border: 2px solid #ffd600;
  `,

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

  BoardTitle: styled(IIcon)`
    position: absolute;
    top: -4px;
    right: 10px;
    width: 25px;
    height: 50px;
    z-index: 4;
    text-align: center;
    color: #ffd600;
    padding: 2px;
    background-color: black;
    text-align-vertical: center;
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
