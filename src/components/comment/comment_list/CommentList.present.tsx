import React from 'react';
import { Text, View } from 'react-native';
import {
  UserBox,
  UserImage,
  UserInfoBox,
  UserInfo,
  ClassNumber,
  UserName,
  Date,
  CommentContents,
} from './CommentList.styles';

const CommentListUI = (props: any) => {
  return (
    <View>
      <Text>이상혁</Text>
      {props.data?.fetchUseditemQuestions.map((el: any) => {
        <UserBox key={el._id}>
          <UserImage
            source={require('../../../../public/images/defaultprofile2.png')}
          />
          <UserInfoBox>
            <UserInfo>
              <ClassNumber></ClassNumber>
              <UserName>{el.user.name}</UserName>
            </UserInfo>
            <Date>{el.createdAt.slice(0, 10)}</Date>
          </UserInfoBox>
        </UserBox>;
        <CommentContents>{el.contents}</CommentContents>;
      })}
    </View>
  );
};
export default CommentListUI;
