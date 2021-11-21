import styled from '@emotion/native';
import EIcon from 'react-native-vector-icons/EvilIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

export const S = {
  BoardContainer: styled.View``,

  PinkLine: styled.View`
    border: 1px solid pink;
  `,

  YellowLine: styled.View`
    border: 1px solid #ffd600;
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
    overflow: hidden;
  `,

  BoardTitle: styled(IIcon)`
    position: absolute;
    top: -4px;
    left: 10px;
    width: 25px;
    height: 50px;
    z-index: 4;
    text-align: center;
    color: #ffd600;
    padding: 2px;
    /* background-color: black; */
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

  Title: styled.Text`
    font-size: 30px;
    color: black;
    margin-bottom: 5px;
    font-family: 'CuteFont-Regular';
  `,

  Contents: styled.Text`
    width: 270px;
    color: black;
    margin-bottom: 10px;
    font-family: 'CuteFont-Regular';
    font-size: 20px;
  `,

  BottomView: styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  Date: styled.Text`
    color: black;
    margin-right: 10px;
  `,

  NickName2: styled.Text`
    color: black;
    margin-right: 10px;
  `,
  Profile: styled.Image`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-right: 10px;
  `,

  PersonIcon: styled(IIcon)`
    color: gray;
  `,
};
