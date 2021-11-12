import styled from '@emotion/native';

export const Wrapper = styled.View`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const TitleImage = styled.Image`
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const EmailView = styled.View`
  /* border: solid 1px black; */
  height: 65px;
  margin-bottom: 10px;
`;

export const EmailInput = styled.TextInput`
  border: solid 1px gray;
  padding-left: 10px;
  border-radius: 10px;
  width: 259px;
  height: 40px;
  font-size: 13px;
  margin-bottom: 5px;
`;

export const EmailError = styled.Text`
  font-size: 13px;
  color: red;
`;

export const PassView = styled.View`
  /* border: solid 1px black; */
  margin-bottom: 10px;
  height: 65px;
`;

export const PassInput = styled.TextInput`
  border: solid 1px gray;
  padding-left: 10px;
  border-radius: 10px;
  width: 259px;
  height: 40px;
  font-size: 13px;
  margin-bottom: 5px;
`;

export const PassError = styled.Text`
  font-size: 13px;
  color: red;
`;

export const LoginView = styled.TouchableOpacity`
  background-color: #ffd600;
  width: 259px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const LoginText = styled.Text`
  font-size: 16px;
  color: black;
`;

export const SignUpView = styled.TouchableOpacity`
  width: 259px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;

export const SignUpText = styled.Text`
  font-size: 16px;
  color: black;
`;
