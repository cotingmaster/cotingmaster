import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { S } from './Myboards.styles';

const MyBoardsContainer = ({ data2, refetch2, isboard }: any) => {
  const navigation = useNavigation();
  const onPressMoveToDetail = (el: any) => {
    const boardDetail =
      el.remarks === 'Freeboard'
        ? '잡담게시판디테일'
        : el.remarks === 'SharingInfo'
        ? '정보공유게시판디테일'
        : '만남게시판디테일';
    navigation.push(boardDetail, {
      id: el._id,
    });
  };

  useEffect(() => {
    refetch2({ page: 1 });
  }, []);

  return (
    <>
      {data2?.fetchUseditemsISold.map((el: any, index: any) => (
        <S.BoardContainer key={el._id}>
          <S.YellowLine></S.YellowLine>
          <S.Box onPress={() => onPressMoveToDetail(el)} isboard={isboard}>
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
            {el.images ? (
              <S.BoardPhoto
                source={{
                  uri: el?.images[0],
                }}
              />
            ) : (
              <S.DefaultImage name="image" size={70} />
            )}
            <S.ContentsWrapper>
              <S.Title>{el.name}</S.Title>
              <S.Contents>{el.contents}</S.Contents>

              <S.BottomView>
                {el.seller.picture ? (
                  <S.Profile source={{ uri: el.seller.picture }} />
                ) : (
                  <S.PersonIcon name="person-circle-outline" size={10} />
                )}
                <S.NickName2>{el.seller.name}기</S.NickName2>
                <S.Date>{el.createdAt.slice(0, 10)}</S.Date>
              </S.BottomView>
            </S.ContentsWrapper>
          </S.Box>
        </S.BoardContainer>
      ))}
    </>
  );
};

export default MyBoardsContainer;
