import styled from '@emotion/native';

export const ScrollView = styled.ScrollView`
  background-color: white;
`;

export const Wrapper = styled.View``;

export const TopView = styled.View`
  width: 375px;
  border-bottom-width: 1px;
  border-bottom-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SearchImage = styled.Image``;

export const Input = styled.TextInput`
  font-size: 23px;
  color: black;
  margin-right: 10px;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #ffd600;
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: black;
`;

export const DataView = styled.View``;

export const BoardTitle = styled.View`
  width: 99px;
  height: 29px;
  background-color: pink;
  border-radius: 5px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const BoardText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ProfileView = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.Image`
  margin-right: 10px;
`;

export const NameView = styled.View``;

export const Name = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

export const Date = styled.Text`
  color: black;
`;

export const Contents = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  color: black;
  margin-bottom: 10px;
`;

export const BottomView = styled.View`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const CommentView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export const Comment = styled.Image`
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

export const CommentCount = styled.Text`
  font-size: 18px;
  color: black;
`;

export const LikeView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export const Like = styled.Image`
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

export const LikeCount = styled.Text`
  font-size: 18px;
  color: black;
`;

export const Line = styled.View`
  width: 375px;
  border-bottom-width: 10px;
  border-bottom-color: #ffd600;
  margin-bottom: 10px;
`;
