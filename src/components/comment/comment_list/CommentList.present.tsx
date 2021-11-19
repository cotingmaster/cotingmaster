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
  Icon,
  Line,
  Wrapper,
  DeleteSubmit,
  AnswerSubmit,
} from './CommentList.styles';
import AnswerIcon from 'react-native-vector-icons/FontAwesome';
import DeleteIcon from 'react-native-vector-icons/MaterialIcons';
import AnswerWrite from '../answer_write/AnswerWrite.container';
import AnswerList from '../answer_list/AnswerList.container';

const CommentListUI = (props: any) => {
  return (
    <>
      <Wrapper>
        {/* <View> */}
        <UserBox>
          <UserImage
            source={require('../../../../public/images/defaultprofile2.png')}
          />
          <UserInfoBox>
            <UserInfo>
              <ClassNumber></ClassNumber>
              <UserName>{props.el?.user.name}</UserName>
            </UserInfo>
            <Date>{props.el.createdAt.slice(0, 10)}</Date>
          </UserInfoBox>
        </UserBox>
        <CommentContents>{props.el?.contents}</CommentContents>
        <Icon>
          <DeleteSubmit onPress={props.onPressDelete}>
            <DeleteIcon name="delete-outline" color={'black'} size={20} />
          </DeleteSubmit>
          <AnswerSubmit onPress={props.onPressAnswer}>
            <AnswerIcon name="comments-o" color={'black'} size={20} />
          </AnswerSubmit>
        </Icon>
        {props.answersData?.fetchUseditemQuestionAnswers.map((el: any) => (
          <AnswerWrite el={el} />
        ))}

        {props.isAnswer && (
          <AnswerList el={props.el} setIsAnswer={props.setIsAnswer} />
        )}
      </Wrapper>
      <Line />
    </>
  );
};
export default CommentListUI;
