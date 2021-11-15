import styled from '@emotion/native';

export const Wrapper = styled.View`
  height: 100%;
  background-color: white;
`;

export const MainView = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const MainTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const BoardTitleView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd600;
  width: 100px;
  height: 29px;
  /* border: solid 1px black; */
  border-radius: 5px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const BoardTitle = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const Contents = styled.Text`
  font-size: 15px;
  margin-left: 13px;
  color: black;
  margin-bottom: 10px;
`;

export const BottomView = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const CommentView = styled.View`
  margin-left: 13px;
  margin-right: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentImage = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const CommentCount = styled.Text`
  font-size: 18px;
  color: black;
`;

export const LikeView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LikeImage = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const LikeCount = styled.Text`
  font-size: 18px;
  color: black;
`;

export const Line = styled.View`
  width: 100%;
  height: 12px;
  background-color: #e5e5e5;
  margin-bottom: 15px;
`;

export const Text1 = styled.Text`
  font-size: 25px;
  font-weight: bold;
  border: solid 1px black;
`;
