import styled from '@emotion/native';

export const Wrapper = styled.View`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
`;

// export const Button1 = styled.Button``;

export const ProfileDefault = styled.Image`
  width: 71px;
  height: 66px;
  margin-bottom: 15px;
`;

export const NickNameView = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  /* border: solid 1px black; */
  margin-left: 80px;
`;

export const NickName = styled.Text`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  /* border: solid 1px black; */
  color: black;
  width: 140px;
`;

export const Logout = styled.TouchableOpacity`
  width: 74px;
  height: 22px;
  background-color: #ffd600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const LogoutText = styled.Text`
  font-size: 12px;
  color: black;
`;

export const ProfileUpdateView = styled.TouchableOpacity`
  width: 308px;
  height: 31px;
  background-color: #ffd600;
  /* border: solid 1px gray; */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

export const ProfileUpdateText = styled.Text`
  font-size: 13px;
  /* font-weight: bold; */
  color: black;
`;

export const Line = styled.View`
  width: 350px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin-bottom: 30px;
`;

export const MyLikeView = styled.View`
  width: 350px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin-bottom: 20px;

  /* border: solid 1px black; */
`;

export const MyLikeImage = styled.Image`
  width: 23px;
  height: 23px;
  margin-right: 15px;
  margin-left: 7px;
`;

export const MyLikeTitle = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

export const MyBoardsView = styled.View`
  width: 350px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  /* border: solid 1px black; */
  margin-bottom: 20px;
`;

export const MyBoardsImage = styled.Image`
  width: 38px;
  height: 34px;
  margin-right: 15px;
`;

export const MyBoardsTitle = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

export const MyMoneyView = styled.View`
  width: 350px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  /* border: solid 1px black; */
`;

export const MyMoneyImage = styled.Image`
  width: 45px;
  height: 45px;
  margin-right: 15px;
`;

export const MyMoneyTitle = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: bold;
`;
