import React from 'react';
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
            <Box>
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
