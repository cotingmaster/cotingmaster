import styled from '@emotion/native';

export const ScrollView = styled.ScrollView``;

export const Wrapper = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  z-index: 0;
  /* background-color: red; */
`;

export const MainTitle = styled.Text`
  font-size: 30px;
  color: black;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const SafeAreaViewStyle = styled.SafeAreaView`
  flex: 1;
  margin-top: 10px;
`;

export const List = styled.FlatList``;

export const Box = styled.TouchableOpacity`
  width: 340px;
  height: 137px;
  background-color: pink;
  border-radius: 10px;
  elevation: 10;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  margin-bottom: 15px;
  /* position: absolute; */
`;

export const Tilte = styled.Text`
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;

export const Place = styled.Text`
  height: 50px;
  color: black;
  /* border: solid 1px black; */
  margin-bottom: 10px;
`;

export const BottomView = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Date = styled.Text`
  color: black;
  margin-right: 10px;
`;

export const NickName = styled.Text`
  color: black;
`;

export const RegisterView = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 300px;
  bottom: 10px;
  z-index: 1;
`;

export const ButtonImage = styled.Image``;
