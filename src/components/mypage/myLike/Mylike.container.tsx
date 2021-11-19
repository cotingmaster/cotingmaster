import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import EIcon from 'react-native-vector-icons/EvilIcons';

const BoardContainer = styled.View``;

const BoardTitle = styled.Text`
  width: 80px;
  text-align: center;
  color: black;
  font-size: 15px;
  padding-bottom: 2px;
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Box = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 370px;
  height: 140px;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  elevation: 10;
  padding: 10px;
  margin-bottom: 15px;
  justify-content: flex-start;
  align-items: center;
`;

const BoardPhoto = styled.Image`
  width: 60px;
  height: 60px;
  margin-left: 5px;
  margin-right: 10px;
`;

const DefaultImage = styled(EIcon)`
  color: #e4e4e4;
`;
const ContentsWrapper = styled.View`
  display: flex;
`;
const Tilte = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
`;

const Contents = styled.Text`
  width: 270px;
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
          <BoardTitle>
            {el.remarks === 'Freeboard'
              ? '커뮤니티'
              : el.remarks === 'SharingInfo'
              ? '정보공유'
              : '만남'}
          </BoardTitle>
          <Box onPress={() => onPressMoveToDetail(el)}>
            {/* {el.images ? ( */}
            <BoardPhoto
              source={{
                uri: 'https://blog.kakaocdn.net/dn/XlVZH/btqIH50as13/LwCnDkeRzRz9kETtUMaHyk/img.jpg',
              }}
            />
            {/* // ) : (
          //   <DefaultImage name="image" size={70} />
          // )} */}
            <ContentsWrapper>
              <Tilte>{el.name}</Tilte>
              <Contents>{el.contents}</Contents>

              <BottomView>
                <Date>{el.createdAt.slice(0, 10)}</Date>
                <NickName2>{el.seller.name}</NickName2>
              </BottomView>
            </ContentsWrapper>
          </Box>
        </BoardContainer>
      ))}
    </>
  );
};

export default MyLikeContainer;
