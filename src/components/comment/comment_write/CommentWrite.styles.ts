import styled from '@emotion/native';

export const Wrapper = styled.View`
  padding: 5px;
`;

export const UserBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const ContentsBox = styled.View`
  position: relative;
`;
export const CommentContents = styled.TextInput`
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0.7px solid gray;
`;
export const Submit = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 22px;
`;

export const SubmitText = styled.Text``;
