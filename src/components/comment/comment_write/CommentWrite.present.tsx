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
        />
        <UserInfoBox>
          <UserInfo>
            <ClassNumber>
              {props.usedItemdata?.fetchUseditem.seller.picture}
            </ClassNumber>
            <UserName>{props.usedItemdata?.fetchUseditem.seller.name}</UserName>
          </UserInfo>
          <Date>
            {props.usedItemdata?.fetchUseditem.createdAt.slice(0, 10)}
          </Date>
        </UserInfoBox>
      </UserBox>
      {/* <CommentText>댓글</CommentText> */}
      <ContentsBox>
        <CommentContents
          onChangeText={props.setContents}
          placeholder="댓글을 입력하세요"
          value={props.contents}
        />
        <Submit onPress={props.onCommtentSubmit}>
          <EvilIcons name="pencil" color={'black'} size={25} />
        </Submit>
      </ContentsBox>
    </Wrapper>
  );
};
export default CommentWriteUI;
