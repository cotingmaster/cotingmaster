import React from 'react';
import { S } from '../board.styles';

export default function FreeboardUI(props) {
  return (
    <S.View>
      <S.ScrollViewStyle>
        <S.TitleWrapper>
          <S.CurlyBracket>&#123;</S.CurlyBracket>
          <S.MainTitle>&nbsp; 잡담 &nbsp;</S.MainTitle>
          <S.CurlyBracket>&#125;</S.CurlyBracket>
        </S.TitleWrapper>
        {props.freeData?.map((el: any) => (
          <S.BoardContainer key={el._id}>
            <S.GrayLine></S.GrayLine>
            <S.Box onPress={() => props.onPressMoveToDetail(el)}>
              <S.BoardTitle name="chatbubbles" size={25} />
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
                    <S.PersonIcon name="person-circle-outline" size={20} />
                  )}
                  <S.NickName2>{el.seller.name}기</S.NickName2>
                  <S.Date>{el.createdAt.slice(0, 10)}</S.Date>
                </S.BottomView>
              </S.ContentsWrapper>
            </S.Box>
          </S.BoardContainer>
        ))}
      </S.ScrollViewStyle>
      <S.PressIcon onPress={props.onPressWrite}>
        <S.PlusIcon name="plus" size={80} />
      </S.PressIcon>
    </S.View>
  );
}

// export const FreeBoardUI = ({
//   freeData,
//   onLoadMore,
//   setRefreshing,
//   refreshing,
// }: any) => {
//   const navigation = useNavigation();

//   const renderItem = ({ item }: any) => (
//     <Box
//       onPress={() =>
//         navigation.push('잡담게시판디테일', {
//           id: item._id,
//         })
//       }>
//       <Tilte>{item.name}</Tilte>
//       <Place>{item.contents}</Place>
//       <BottomView>
//         <Date>
//           {item.updatedAt
//             ? item.updatedAt.slice(0, 10)
//             : item.createdAt.slice(0, 10)}
//         </Date>
//         <NickName>{item.seller.name}</NickName>
//       </BottomView>
//     </Box>
//   );

//   return (
//     <SafeAreaViewStyle>
//       <Wrapper>
//         <MainTitle>잡담</MainTitle>
//         <List
//           data={freeData}
//           renderItem={renderItem}
//           keyExtractor={item => item.remarks + item._id}
//           onEndReached={onLoadMore}
//           onEndReachedThreshold={1}
//           refreshing={refreshing}
//           onRefresh={() => {
//             setRefreshing(true), onLoadMore;
//           }}
//         />
//       </Wrapper>
//       <RegisterView onPress={() => navigation.navigate('잡담게시판등록')}>
//         <ButtonImage
//           source={require('../../../../public/images/writebutton.png')}
//         />
//       </RegisterView>
//     </SafeAreaViewStyle>
//   );
// };
