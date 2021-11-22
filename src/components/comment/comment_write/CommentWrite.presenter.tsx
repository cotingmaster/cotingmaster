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
  PersonIcon,
  PinkWrapper,
} from './CommentWrite.styles';
import EvilIcons from 'react-native-vector-icons/Ionicons';

const CommentWriteUI = (props: any) => {
  return (
    <Wrapper>
      <PinkWrapper>
        <UserBox>
          {props.loginData?.fetchUserLoggedIn.picture ? (
            <UserImage
              source={{ uri: props.loginData?.fetchUserLoggedIn.picture }}
            />
          ) : (
            <PersonIcon name="person-circle-outline" size={35} />
          )}
          <UserInfoBox>
            <UserInfo>
              <UserName>{props.loginData?.fetchUserLoggedIn.name}기</UserName>
            </UserInfo>
          </UserInfoBox>
        </UserBox>
        <ContentsBox>
          <CommentContents
            onChangeText={props.setContents}
            placeholder="댓글을 입력하세요"
            value={props.contents}
          />
          <Submit onPress={props.onCommentSubmit}>
            <EvilIcons name="pencil" color={'pink'} size={25} />
          </Submit>
        </ContentsBox>
      </PinkWrapper>
    </Wrapper>
  );
};
export default CommentWriteUI;
