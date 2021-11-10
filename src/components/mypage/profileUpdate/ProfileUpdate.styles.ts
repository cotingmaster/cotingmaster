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
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Profile = styled.Image`
  width: 71px;
  height: 66px;
  margin-bottom: 10px;
`;

export const NickName = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;

export const UpdateNickName = styled.TextInput`
  border: solid 1px black;
  width: 308px;
  height: 41px;
  font-size: 15px;
`;

export const Submit = styled.TouchableOpacity`
  width: 375px;
  height: 68px;
  background-color: #ffd600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;
