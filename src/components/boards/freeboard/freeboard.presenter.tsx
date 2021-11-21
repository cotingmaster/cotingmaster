import React from 'react';
import {
  ScrollView,
  Wrapper,
  MainTitle,
  Box,
  Tilte,
  Place,
  BottomView,
  Date,
  NickName,
  RegisterView,
  ButtonImage,
  List,
  SafeAreaViewStyle,
} from '../board.styles';
import { useNavigation } from '@react-navigation/native';

const FreeBoardUI = ({
  freeData,
  onLoadMore,
  setRefreshing,
  refreshing,
}: any) => {
  const navigation = useNavigation();

  const renderItem = ({ item }: any) => (
    <Box
      onPress={() =>
        navigation.push('잡담게시판디테일', {
          id: item._id,
        })
      }>
      <Tilte>{item.name}</Tilte>
      <Place>{item.contents}</Place>
      <BottomView>
        <Date>
          {item.updatedAt
            ? item.updatedAt.slice(0, 10)
            : item.createdAt.slice(0, 10)}
        </Date>
        <NickName>{item.seller.name}</NickName>
      </BottomView>
    </Box>
  );

  return (
    <SafeAreaViewStyle>
      <Wrapper>
        <MainTitle>잡담</MainTitle>
        <List
          data={freeData}
          renderItem={renderItem}
          keyExtractor={item => item.remarks + item._id}
          onEndReached={onLoadMore}
          onEndReachedThreshold={1}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true), onLoadMore;
          }}
        />
      </Wrapper>
      <RegisterView onPress={() => navigation.navigate('잡담게시판등록')}>
        <ButtonImage
          source={require('../../../../public/images/writebutton.png')}
        />
      </RegisterView>
    </SafeAreaViewStyle>
  );
};

export default FreeBoardUI;
