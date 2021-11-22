import React from 'react';
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
  Icon,
  Line,
  Wrapper,
  DeleteSubmit,
  AnswerSubmit,
  PersonIcon,
} from './CommentList.styles';
import AnswerIcon from 'react-native-vector-icons/FontAwesome';
import DeleteIcon from 'react-native-vector-icons/MaterialIcons';
// import AnswerWrite from '../answer_write/AnswerWrite.container';
// import AnswerList from '../answer_list/AnswerList.container';

const CommentListUI = (props: any) => {
  return (
    <>
      <Wrapper>
        {/* <View> */}
        <UserBox>
          {props.el?.user.picture ? (
            <UserImage source={{ uri: props.el?.user.picture }} />
          ) : (
            <PersonIcon name="person-circle-outline" size={35} />
          )}
          <UserInfoBox>
            <UserInfo>
              <UserName>{props.el?.user.name}</UserName>
            </UserInfo>
            <Date>{props.el.createdAt.slice(0, 10)}</Date>
          </UserInfoBox>
        </UserBox>
        <CommentContents>{props.el?.contents}</CommentContents>
        <Icon>
          <DeleteSubmit onPress={props.onPressDelete}>
            <DeleteIcon name="delete-outline" color="pink" size={20} />
          </DeleteSubmit>
          {/* <AnswerSubmit onPress={props.onPressAnswer}>
            <AnswerIcon name="comments-o" color={'black'} size={20} />
          </AnswerSubmit> */}
        </Icon>
      </Wrapper>
      <Line />
    </>
  );
};
export default CommentListUI;
