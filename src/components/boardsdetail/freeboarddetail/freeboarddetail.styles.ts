import styled from '@emotion/native';

export const ScrollView = styled.ScrollView`
  background-color: white;
`;

export const Wrapper = styled.View`
  height: 100%;
  background-color: white;
`;

export const TopImage = styled.View`
  width: 100%;
  height: 250px;
  background-color: pink;
  margin-bottom: 10px;
`;

export const MainView = styled.View`
  padding-right: 10px;
  padding-left: 10px;
`;

export const TopView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TopLeft = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ProfileImage = styled.Image`
  margin-right: 10px;
`;

export const NameView = styled.View``;

export const Name = styled.Text`
  color: black;
  font-size: 18px;
`;

export const Date = styled.Text``;

export const TopRight = styled.View``;

export const LikeView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  margin-left: 30px;
`;

export const LikeButton = styled.TouchableOpacity``;

export const Like = styled.Text`
  font-size: 20px;
`;

export const LikeSu = styled.Text`
  font-size: 15px;
  color: black;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export const Contents = styled.Text`
  font-size: 15px;
`;

export const IoniconsView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export const UpdateView = styled.TouchableOpacity``;

export const DeleteView = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ModalView = styled.View`
  z-index: 1;
`;
