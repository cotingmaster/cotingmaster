import styled from '@emotion/native';

export const UserBox = styled.View`
  display: flex;
  flex-direction: row;
`;

export const UserImage = styled.Image``;

export const UserInfoBox = styled.View`
  margin-left: 10px;
  display: flex;
  /* flex-direction: column; */
`;

export const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ClassNumber = styled.Text``;

export const UserName = styled.Text`
  /* margin-left: 6px; */
  font-weight: bold;
  color: black;
`;

export const Date = styled.Text`
  font-size: 10px;
`;

// const CommentText = styled.Text``;

export const CommentContents = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  color: black;
  width: 220px;
`;

export const Container = styled.View`
  margin: 10px;
`;

export const List = styled.FlatList``;

export const Wrapper = styled.View`
  /* background-color: pink; */
  display: flex;
  /* align-items: center; */
  flex-direction: row;
  margin: 5px;
`;

export const Line = styled.View`
  width: 375px;
  border-bottom-width: 0.5px;
  border-bottom-color: gray;
`;

export const Icon = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

export const DeleteSubmit = styled.TouchableOpacity``;

export const AnswerSubmit = styled.TouchableOpacity``;
