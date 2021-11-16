import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

const BoardContainer = styled.View`
  /* width: 340px;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  border-radius: 5px; */
`;

const BoardTitle = styled.Text`
  color: black;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Box = styled.TouchableOpacity`
  width: 320px;
  height: 137px;
  background-color: skyblue;
  border-radius: 10px;
  elevation: 10;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  margin-bottom: 15px;
`;

const Tilte = styled.Text`
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;

const Contents = styled.Text`
  height: 50px;
  color: black;
  /* border: solid 1px black; */
  margin-bottom: 10px;
`;

const BottomView = styled.View`
  display: flex;
  flex-direction: row;
`;

const Date = styled.Text`
  color: black;
  margin-right: 10px;
`;

const NickName2 = styled.Text`
  color: black;
`;

const MyLikeContainer = ({ data3 }: any) => {
  console.log('data3', data3);
  const navigation = useNavigation();
  const onPressMoveToDetail = (el: any) => {
    const boardDetail =
      el.remarks === 'Freeboard'
        ? '커뮤니티게시판디테일'
        : el.remarks === 'SharingInfo'
        ? '정보공유게시판디테일'
        : '만남게시판디테일';
    navigation.push(boardDetail, {
      id: el._id,
    });
  };

  return (
    <>
      {data3?.fetchUseditemsIPicked.map((el: any, index: any) => (
        <BoardContainer key={el._id}>
          <BoardTitle>정보공유</BoardTitle>
          <Box onPress={() => onPressMoveToDetail(el)}>
            <Tilte>{el.name}</Tilte>
            <Contents>{el.contents}</Contents>
            <BottomView>
              <Date>{el.createdAt.slice(0, 10)}</Date>
              <NickName2>{el.seller.name}</NickName2>
            </BottomView>
          </Box>
        </BoardContainer>
      ))}
    </>
  );
};

export default MyLikeContainer;
