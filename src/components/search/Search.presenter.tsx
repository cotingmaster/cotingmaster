import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { S } from './Search.styles';

const SearchUI = (props: any) => {
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
              {/* {el.images ? ( */}
              <S.BoardPhoto
                source={{
                  uri: 'https://blog.kakaocdn.net/dn/XlVZH/btqIH50as13/LwCnDkeRzRz9kETtUMaHyk/img.jpg',
                }}
              />
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
      </S.Wrapper>
    </S.ScrollView>
  );
};

export default SearchUI;
