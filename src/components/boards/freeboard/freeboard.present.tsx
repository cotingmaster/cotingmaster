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
} from './freeboard.styles';
import { useNavigation } from '@react-navigation/native';

const FreeBoardUI = ({ freeData }: any) => {
  const navigation = useNavigation();

  const renderItem = ({ item }: any) => {
    console.log('bbb', item);
    return (
      <Box
        onPress={() =>
          navigation.push('커뮤니티게시판디테일', {
            id: item._id,
          })
        }>
        <Tilte>{item.name}</Tilte>
        <Place>{item.contents}</Place>
        <BottomView>
          {/* <Date>{item.createdAt.slice(0, 10)}</Date> */}
          <NickName>{item.seller.name}</NickName>
        </BottomView>
      </Box>
    );
  };

  return (
    <SafeAreaViewStyle>
      <Wrapper>
        <MainTitle>커뮤니티</MainTitle>
        <List
          data={freeData}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </Wrapper>
      <RegisterView onPress={() => navigation.navigate('커뮤니티게시판등록')}>
        <ButtonImage
          source={require('../../../../public/images/writebutton.png')}
        />
      </RegisterView>
    </SafeAreaViewStyle>
  );
};

export default FreeBoardUI;

{
  /* <Button1
title="커뮤니티디테일페이지가기"
onPress={() => navigation.navigate('커뮤니티게시판디테일')}
/>
<Button1
title="커뮤니티등록페이지가기"
onPress={() => navigation.navigate('커뮤니티게시판등록')}
/> */
}
