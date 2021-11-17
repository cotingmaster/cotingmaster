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
  ContentsBox,
} from './CommentWrite.styles';
import EvilIcons from 'react-native-vector-icons/Ionicons';

const CommentWriteUI = (props: any) => {
  return (
    <Wrapper>
      <UserBox>
        <UserImage
          source={require('../../../../public/images/defaultprofile2.png')}
          // {props.loginUser?.fetchUserLoggedIn.picture}
        />
        <UserInfoBox>
          <UserInfo>
            <ClassNumber></ClassNumber>
            <UserName>{props.loginUser?.fetchUserLoggedIn.name}</UserName>
          </UserInfo>
        </UserInfoBox>
      </UserBox>
      {/* <CommentText>댓글</CommentText> */}
      <ContentsBox>
        <CommentContents
          onChangeText={props.setContents}
          placeholder="댓글을 입력하세요"
        />
        <Submit onPress={props.onCommtentSubmit}>
          <EvilIcons name="pencil" color={'black'} size={25} />
        </Submit>
      </ContentsBox>
    </Wrapper>
  );
};
export default CommentWriteUI;
