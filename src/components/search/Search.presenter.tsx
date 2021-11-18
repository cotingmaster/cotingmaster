import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ScrollView,
  Wrapper,
  TopView,
  SearchImage,
  Input,
  ButtonView,
  ButtonText,
  BoardContainer,
  BoardTitle,
  Box,
  Tilte,
  Contents,
  BottomView,
  Date,
  NickName2,
} from './Search.styles';

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
    console.log(el._id);
  };

  return (
    <ScrollView>
      <Wrapper>
        <TopView>
          <SearchImage source={require('../../../public/images/search.png')} />
          <Input
            placeholder="검색어를 입력해주세요."
            onChangeText={props.onChangeTextSearch}
          />
          <ButtonView onPress={props.onPressButton}>
            <ButtonText>검색</ButtonText>
          </ButtonView>
        </TopView>
        {props.data?.fetchUseditems.map((el: any) => (
          <BoardContainer key={el._id}>
            <BoardTitle>{el.remarks}</BoardTitle>
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
      </Wrapper>
    </ScrollView>
  );
};

export default SearchUI;
