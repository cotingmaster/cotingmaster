import styled from '@emotion/native';
import IIcon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

export const Wrapper = styled.View`
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export const TextSubmitBox = styled.View`
  display: flex;
  /* justify-content: space-between; */
  margin-top: 10px;
`;

export const TitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BoardTitle = styled(IIcon)`
  margin-top: 15px;
  margin-right: 10px;
  color: #ffd600;
`;

export const MainTitle = styled.Text`
  margin-top: 15px;
  font-size: 30px;
  color: black;
  text-align: center;
  font-family: 'Jua-Regular';
`;

export const Line = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #d0cfcf;
`;

export const Title = styled.TextInput`
  margin-left: 15px;
  font-family: 'CuteFont-Regular';
  font-size: 30px;
`;

export const PickerText = styled.Text`
  font-size: 20px;
  color: #ffd600;
  font-family: 'CuteFont-Regular';
  text-align-vertical: center;
`;

export const Contents = styled.TextInput`
  margin-left: 15px;
  margin-top: -20px;
  font-family: 'CuteFont-Regular';
  font-size: 20px;
`;

export const Submit = styled.TouchableOpacity`
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

export const PressWrapper = styled.TouchableOpacity``;

export const PhotoAddButton = styled(MIcon)`
  color: #ffd600;
  margin-left: 20px;
`;
