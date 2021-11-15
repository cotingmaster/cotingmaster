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
} from './CommentWrite.styles';

const CommentWriteUI = () => {
  return (
    <View>
      <UserBox>
        <UserImage
          source={require('../../../../public/images/defaultprofile2.png')}
        />
        <UserInfoBox>
          <UserInfo>
            <ClassNumber>3기</ClassNumber>
            <UserName>코캠러</UserName>
          </UserInfo>
          <Date>2021.11.03</Date>
        </UserInfoBox>
      </UserBox>
      {/* <CommentText>댓글</CommentText> */}
      <CommentContents placeholder="댓글을 입력하세요" />
    </View>
  );
};
export default CommentWriteUI;
