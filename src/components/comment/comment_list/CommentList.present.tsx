import React from 'react';
import { Text, ScrollView } from 'react-native';
import {
  UserBox,
  UserImage,
  UserInfoBox,
  UserInfo,
  ClassNumber,
  UserName,
  Date,
  CommentContents,
  SafeAreaViewStyle,
  List,
} from './CommentList.styles';

const CommentListUI = (props: any) => {
  console.log('abc', props.data);

  const renderItem = ({ item }: any) => (
    <UserBox>
      <UserImage
        source={require('../../../../public/images/defaultprofile2.png')}
        // {el.user.picture}
      />
      <UserName>{item.user.name}</UserName>
      <CommentContents>{item.contents}</CommentContents>;
      <Date>
        {item.updatedAt
          ? item.updatedAt.slice(0, 10)
          : item.createdAt.slice(0, 10)}
      </Date>
    </UserBox>
  );

  return (
    <SafeAreaViewStyle>
      <Text>{props.contents}</Text>
      <List
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.remarks + item._id}
        onEndReached={props.onLoadMore}
        onEndReachedThreshold={0.8}
      />
    </SafeAreaViewStyle>
  );
};
export default CommentListUI;
