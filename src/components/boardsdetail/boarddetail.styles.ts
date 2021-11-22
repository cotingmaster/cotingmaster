import styled from '@emotion/native';
import IIcon from 'react-native-vector-icons/Ionicons';

export const S = {
  ScrollView: styled.ScrollView`
    background-color: white;
  `,
  Wrapper: styled.View`
    height: 100%;
    background-color: white;
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
  TopRight: styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    margin-bottom: 10px;
    font-family: 'CuteFont-Regular';
  `,
  Contents: styled.Text`
    font-size: 20px;
    font-family: 'CuteFont-Regular';
  `,
  IoniconsView: styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
  `,
  Ionicons: styled(IIcon)``,
  UpdateView: styled.TouchableOpacity``,
  DeleteView: styled.TouchableOpacity`
    margin-left: 10px;
  `,
  ModalView: styled.View`
    z-index: 1;
  `,
  PersonIcon: styled(IIcon)`
    color: gray;
  `,
};
