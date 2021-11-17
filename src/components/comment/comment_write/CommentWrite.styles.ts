import styled from '@emotion/native';

export const Wrapper = styled.View``;

export const UserBox = styled.View`
  display: flex;
  flex-direction: row;
`;
export const UserImage = styled.Image``;

export const UserInfoBox = styled.View`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ClassNumber = styled.Text``;

export const UserName = styled.Text`
  margin-left: 6px;
  font-weight: bold;
  color: black;
`;

export const Date = styled.Text``;

// const CommentText = styled.Text``;

export const CommentContents = styled.TextInput`
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid;
`;

export const Submit = styled.TouchableOpacity`
  background-color: #ffd600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text``;
