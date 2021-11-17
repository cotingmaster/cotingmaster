import React from 'react';
import {
  Wrapper,
  UserBox,
  UserImage,
  UserInfoBox,
  UserInfo,
  ClassNumber,
  UserName,
  Date,
  CommentContents,
  Submit,
  SubmitText,
} from './CommentWrite.styles';

const CommentWriteUI = (props: any) => {
  return (
    <Wrapper>
      <UserBox>
        <UserImage
          source={require('../../../../public/images/defaultprofile2.png')}
        />
        <UserInfoBox>
          <UserInfo>
            <ClassNumber>
              {props.data?.fetchUseditem.seller.picture}
            </ClassNumber>
            <UserName>{props.data?.fetchUseditem.seller.name}</UserName>
          </UserInfo>
          <Date>{props.data?.fetchUseditem.createdAt.slice(0, 10)}</Date>
        </UserInfoBox>
      </UserBox>
      {/* <CommentText>댓글</CommentText> */}
      <CommentContents
        onChangeText={text => props.setContents(text)}
        placeholder="댓글을 입력하세요"
      />
      <Submit onPress={props.onCommtentSubmit}>
        <SubmitText>등록하기</SubmitText>
      </Submit>
    </Wrapper>
  );
};
export default CommentWriteUI;
