import styled from '@emotion/native';

export const Wrapper = styled.View`
  height: 100%;
  background-color: white;
`;

export const TopView = styled.View``;

export const MainTitle = styled.Text`
  text-align: center;
  margin-top: 10px;
  font-size: 30px;
  color: black;
  margin-bottom: 5px;
`;

export const Line = styled.View`
  width: 375px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin-bottom: 30px;
`;

export const MapView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 149px;
  height: 143px;
  border: solid 1px black;
  margin-left: 15px;
  margin-bottom: 20px;
`;

export const MapImage = styled.Image``;

export const Date = styled.TextInput`
  width: 350px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin-left: 10px;
`;

export const Location = styled.TextInput`
  width: 350px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin-left: 10px;
`;

export const Title = styled.TextInput`
  width: 350px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin-left: 10px;
`;

export const Contents = styled.TextInput`
  margin-left: 10px;
  height: 100px;
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

export const ScrollView = styled.ScrollView``;
