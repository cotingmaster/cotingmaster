import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { S } from './Myboards.styles';

const MyBoardsContainer = ({ data2 }: any) => {
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
      {data2?.fetchUseditemsISold.map((el: any, index: any) => (
        <S.BoardContainer key={el._id}>
          <S.Box onPress={() => onPressMoveToDetail(el)}>
            {/* {el.images ? ( */}
            <S.BoardPhoto
              source={{
                uri: 'https://blog.kakaocdn.net/dn/XlVZH/btqIH50as13/LwCnDkeRzRz9kETtUMaHyk/img.jpg',
              }}
            />
            <S.MySticker name="pencil" size={32} />
            <S.BoardTitle
              name={
                el.remarks === 'Freeboard'
                  ? 'chatbubbles'
                  : el.remarks === 'SharingInfo'
                  ? 'information-circle'
                  : 'beer'
              }
              size={25}
            />
            {/* // ) : (
            //   <DefaultImage name="image" size={70} />
            // )} */}
            <S.ContentsWrapper>
              <S.Tilte>{el.name}</S.Tilte>
              <S.Contents>{el.contents}</S.Contents>

              <S.BottomView>
                <S.Date>{el.createdAt.slice(0, 10)}</S.Date>
                <S.NickName2>{el.seller.name}</S.NickName2>
              </S.BottomView>
            </S.ContentsWrapper>
          </S.Box>
        </S.BoardContainer>
      ))}
    </>
  );
};

export default MyBoardsContainer;
