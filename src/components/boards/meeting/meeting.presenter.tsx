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

const MeetingUI = ({
  meetingData,
  onLoadMore,
  setRefreshing,
  refreshing,
}: any) => {
  const navigation = useNavigation();

  const renderItem = ({ item }: any) => (
    <Box
      onPress={() =>
        navigation.push('만남게시판디테일', {
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
        <MainTitle>만남</MainTitle>
        <List
          data={meetingData}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          onEndReached={onLoadMore}
          onEndReachedThreshold={1}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true), onLoadMore;
          }}
        />
      </Wrapper>
      <RegisterView onPress={() => navigation.navigate('만남게시판등록')}>
        <ButtonImage
          source={require('../../../../public/images/writebutton.png')}
        />
      </RegisterView>
    </SafeAreaViewStyle>
  );
};

export default MeetingUI;
