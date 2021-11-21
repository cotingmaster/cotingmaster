import styled from '@emotion/native';
import EIcon from 'react-native-vector-icons/EvilIcons';
import IIcon from 'react-native-vector-icons/Ionicons';

export const S = {
  ScrollViewStyle: styled.ScrollView`
    flex: 1;
    height: 1000px;
    position: relative;
  `,

  TitleWrapper: styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-color: gray;
    border-bottom-width: 3px;
    background-color: black;
    height: 100px;
    margin-bottom: 11px;
  `,

  MainTitle: styled.Text`
    font-size: 30px;
    color: white;
    text-align: center;
    font-family: 'Jua-Regular';
  `,

  CurlyBracket: styled.Text`
    font-size: 30px;
    color: #ffd600;
    text-align: center;
    font-family: 'Jua-Regular';
  `,

  BoardContainer: styled.View`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
  `,

  GrayLine: styled.View`
    border: 1px solid gray;
    width: 100%;
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
    margin-bottom: 5px;
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
    /* border: solid 1px black; */
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

  TouchWrapper: styled.View`
    border-radius: 40px;
    overflow: hidden;
  `,
  PressIcon: styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    position: absolute;
    right: 10px;
    bottom: 10px;
  `,

  PlusIcon: styled(EIcon)`
    color: #ffd600;
  `,
  View: styled.View`
    flex: 1;
  `,
};

// export const ScrollView = styled.ScrollView``;

// export const Wrapper = styled.View`
//   display: flex;
//   height: 100%;
//   align-items: center;
//   z-index: 0;
//   /* background-color: red; */
// `;

// export const MainTitle = styled.Text`
//   font-size: 30px;
//   color: black;
//   margin-bottom: 30px;
//   margin-top: 20px;
// `;

// export const SafeAreaViewStyle = styled.SafeAreaView`
//   flex: 1;
//   margin-top: 10px;
// `;

// export const List = styled.FlatList``;

// export const Box = styled.TouchableOpacity`
//   width: 340px;
//   height: 137px;
//   background-color: pink;
//   border-radius: 10px;
//   elevation: 10;
//   padding-left: 20px;
//   padding-right: 20px;
//   padding-top: 10px;
//   margin-bottom: 15px;
//   /* position: absolute; */
// `;

// export const Tilte = styled.Text`
//   font-size: 20px;
//   color: black;
//   margin-bottom: 10px;
// `;

// export const Place = styled.Text`
//   height: 50px;
//   color: black;
//   margin-bottom: 10px;
// `;

// export const BottomView = styled.View`
//   display: flex;
//   flex-direction: row;
// `;

// export const Date = styled.Text`
//   color: black;
//   margin-right: 10px;
// `;

// export const NickName = styled.Text`
//   color: black;
// `;

// export const RegisterView = styled.TouchableOpacity`
//   width: 50px;
//   height: 50px;
//   position: absolute;
//   left: 300px;
//   bottom: 10px;
//   z-index: 1;
// `;

// export const ButtonImage = styled.Image``;
