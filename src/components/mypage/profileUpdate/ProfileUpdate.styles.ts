import styled from '@emotion/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopView = styled.View`
  display: flex;
  align-items: center;
`;

export const MainTitle = styled.Text`
  margin-top: 30px;
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin-bottom: 30px;
`;

export const Profile = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-bottom: 10px;
  background-color: pink;
`;

export const NickName = styled.Text`
  font-size: 17px;
  margin-bottom: 30px;
  color: black;
`;

export const Message = styled.Text`
  width: 308px;
  font-size: 16px;
  margin-bottom: 5px;
  color: gray;
`;

export const UpdateNickName = styled.TextInput`
  border: solid 0.8px black;
  width: 308px;
  height: 41px;
  font-size: 15px;
  margin-bottom: 20px;
`;

export const Submit = styled.TouchableOpacity`
  margin-top: 100px;
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #ffd600;
  font-weight: bold;
`;

export const ScrollViewStyle = styled.ScrollView`
  /* margin-bottom: 20px; */
`;

export const KeyboardAvoidingViewStyle = styled.KeyboardAvoidingView`
  flex: 1;
`;
