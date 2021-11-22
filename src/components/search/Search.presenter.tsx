import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { S } from './Search.styles';

const SearchUI = (props: any) => {
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

  return (
    <S.ScrollView>
      <S.Wrapper>
        <S.TopView>
          <S.Input
            placeholder="검색어를 입력해주세요"
            onChangeText={props.setMySearch}
          />
          <S.ButtonView onPress={props.onPressSearch}>
            <S.SearchIcon name="md-search-circle" />
          </S.ButtonView>
        </S.TopView>

        {props.data?.fetchUseditems.map((el: any) => (
          <S.BoardContainer key={el._id}>
            <S.BlueLine></S.BlueLine>
            <S.Box onPress={() => onPressMoveToDetail(el)}>
              <S.BoardTitle
                name={
                  el.remarks === 'Freeboard'
                    ? 'chatbubbles'
                    : el.remarks === 'SharingInfo'
                    ? 'information-circle'
                    : 'beer'
                }
                size={24}
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
                    <S.PersonIcon name="person-circle-outline" size={30} />
                  )}
                  <S.NickName2>{el.seller.name}기</S.NickName2>
                  <S.Date>{el.createdAt.slice(0, 10)}</S.Date>
                </S.BottomView>
              </S.ContentsWrapper>
            </S.Box>
          </S.BoardContainer>
        ))}
      </S.Wrapper>
    </S.ScrollView>
  );
};

export default SearchUI;
