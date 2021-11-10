import styled from '@emotion/native';

export const Wrapper = styled.View`
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export const TopView = styled.View``;

export const MainView = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const MainTitle = styled.Text`
  font-size: 30px;
  color: black;
`;

export const Line = styled.View`
  width: 375px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin-bottom: 20px;
`;

export const Title = styled.TextInput`
  font-size: 25px;
  font-weight: bold;
  padding-left: 20px;
`;

export const LineView = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Line2 = styled.View`
  width: 350px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

export const Contents = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
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
