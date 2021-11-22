import styled from '@emotion/native';
import IIcon from 'react-native-vector-icons/Ionicons';

export const Wrapper = styled.View`
  padding: 10px;
  background-color: white;
`;

export const PinkWrapper = styled.View`
  border: 0.5px solid pink;
  padding: 5px;
`;

export const UserBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 18px;
`;

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

export const ContentsBox = styled.View``;
export const CommentContents = styled.TextInput`
  padding: 2px;
  /* margin-bottom: 10px; */
  /* border-bottom-width: 1px;
  border-bottom-color: pink; */
  position: relative;
`;
export const Submit = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 12px;
`;

export const SubmitText = styled.Text``;

export const PersonIcon = styled(IIcon)`
  color: gray;
`;
