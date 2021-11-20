import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EIcon from 'react-native-vector-icons/EvilIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';

export const ScrollView = styled.ScrollView``;

export const Wrapper = styled.View`
  display: flex;
  align-items: center;
  background-color: #e4e4e4;
`;

export const ProfileWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-bottom: 20px;
  align-items: center;
  /* background-color: #242424; */
  background-color: black;
  z-index: 1;
`;

export const ProfileUpdate = styled.TouchableOpacity`
  margin-left: 30px;
  position: relative;
  /* background-color: #242424; */
  background-color: black;
`;

export const ProfileDefault = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const NickNameView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
`;

export const LogoutIcon = styled(Icon)`
  color: #ffd600;
`;

export const EditIcon = styled(FIcon)`
  position: absolute;
  color: #ffd600;
  bottom: 10px;
  right: -8px;
`;

export const NickName = styled.Text`
  font-size: 20px;
  color: #ffd600;
`;

export const LogOutView = styled.TouchableOpacity`
  margin-left: 20px;
`;

export const CurvedLine = styled.View`
  height: 40px;
  width: 100%;
  /* background-color: #242424; */
  background-color: black;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  position: relative;
  margin-bottom: 15px;
`;

export const ButtonView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const MyBoards = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const MyIcon = styled(EIcon)`
  color: #ffd600;
`;

export const HeartIcon = styled(IIcon)`
  color: pink;
`;

export const MyText = styled.Text`
  color: #ffd600;
  font-size: 17px;
  margin-left: 3px;
`;

export const MyText2 = styled.Text`
  color: pink;
  font-size: 17px;
  margin-left: 3px;
`;

export const BoardWrapper = styled.View`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
`;
