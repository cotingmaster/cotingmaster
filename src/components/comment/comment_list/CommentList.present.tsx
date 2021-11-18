import React from 'react';
import { Text } from 'react-native';
import {
  UserBox,
  UserImage,
  UserInfoBox,
  UserInfo,
  ClassNumber,
  UserName,
  Date,
  CommentContents,
  Container,
  List,
  Wrapper,
} from './CommentList.styles';

const CommentListUI = (props: any) => {
  // const renderItem = ({ item }: any) => (
  //   <Wrapper>
  //     <UserBox>
  //       <UserImage
  //         source={require('../../../../public/images/defaultprofile2.png')}
  //         // {el.user.picture}
  //       />
  //       <UserName>{item.user.name}</UserName>
  //     </UserBox>
  //     <CommentContents>{item.contents}</CommentContents>
  //     <Date>
  //       {item.updatedAt
  //         ? item.updatedAt.slice(0, 10)
  //         : item.createdAt.slice(0, 10)}
  //     </Date>
  //   </Wrapper>
  // );

  return (
    <Wrapper>
      {/* <Text>{props.contents}</Text>
      <List
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.remarks + item._id}
        onEndReached={props.onLoadMore}
        onEndReachedThreshold={0.8}
      /> */}
    </Wrapper>
  );
};
export default CommentListUI;
