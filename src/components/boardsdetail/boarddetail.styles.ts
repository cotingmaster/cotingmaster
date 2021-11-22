import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from '@emotion/native';
import IIcon from 'react-native-vector-icons/Ionicons';

export const S = {
  ScrollView: styled.ScrollView`
    background-color: white;
  `,
  Wrapper: styled.View`
    height: 100%;
    background-color: white;
    margin-bottom: 10px;
  `,
  TopImage: styled.Image`
    width: 100%;
    height: 230px;
    background-color: pink;
  `,
  MainView: styled.View`
    padding-right: 10px;
    padding-left: 10px;
  `,
  TopView: styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  `,
  TopLeft: styled.View`
    display: flex;
    flex-direction: row;
  `,
  TitleLine: styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
  `,
  ProfileImage: styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 26px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: pink;
  `,
  NameView: styled.View``,

  Name: styled.Text`
    color: black;
    font-size: 25px;
    font-family: 'GamjaFlower-Regular';
  `,
  Date: styled.Text``,

  LikeView: styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 10px;
  `,
  LikeButton: styled.TouchableOpacity``,

  Like: styled.Text`
    font-size: 20px;
  `,

  LikeSu: styled.Text`
    font-size: 15px;
    color: black;
  `,
  Title: styled.Text`
    font-size: 30px;
    color: black;
    font-family: 'CuteFont-Regular';
  `,
  Contents: styled.Text`
    font-size: 20px;
    font-family: 'CuteFont-Regular';
    padding-top: 10px;
    padding-bottom: 10px;
  `,
  IconWrapper: styled.View`
    position: absolute;
    right: 10px;
  `,
  IoniconsView: styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  `,
  Ionicons: styled(IIcon)``,
  UpdateView: styled.TouchableOpacity``,
  DeleteView: styled.TouchableOpacity`
    margin-left: 10px;
  `,
  ModalView: styled.View`
    z-index: 1;
    position: absolute;
    bottom: 0px;
    right: 80px;
    align-items: center;
  `,

  PersonIcon: styled(IIcon)`
    color: gray;
  `,

  ReplyOpen: styled.TouchableOpacity`
    margin-top: 5px;
    position: absolute;
    right: 10px;
    bottom: 0px;
  `,
  ReplyIcon: styled(MIcon)`
    color: pink;
    align-items: flex-end;
  `,
};
