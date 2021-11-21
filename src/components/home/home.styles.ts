import styled from '@emotion/native';
import IIcon from 'react-native-vector-icons/Ionicons';

export const Wrapper = styled.View`
  display: flex;
  align-items: center;
`;

export const MainBox = styled.View`
  padding-left: 40px;
`;

export const MainText = styled.Text`
  font-size: 30px;
  margin-left: 20px;
  color: black;
  font-family: 'Jua-Regular';
`;

export const SubText = styled.Text`
  font-size: 25px;
  margin-left: 20px;
  font-family: 'CuteFont-Regular';
`;

export const Button1 = styled.Button``;

export const TouchBox = styled.TouchableOpacity`
  margin-top: 30px;
  width: 310px;
  height: 80px;
  background-color: white;
  border-radius: 20px;
  elevation: 20;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoardTitle = styled(IIcon)`
  position: absolute;
  font-size: 30px;
  top: 0px;
  left: 20px;
  width: 30px;
  height: 80px;
  z-index: 4;
  text-align: center;
  color: #ffd600;
  padding: 2px;
  text-align-vertical: center;
`;

export const MainIcon = styled(IIcon)`
  margin-right: 30px;
  color: black;
`;

export const LogoImg = styled.View`
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled.Image``;
