import React, { useState } from 'react';
import CommentWriteUI from './CommentWrite.present';
import { useMutation, useQuery } from '@apollo/client';
import { Alert } from 'react-native';
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USER_LOGGEDIN,
} from './CommentWrite.query';
import CommentList from '../comment_list/CommentList.container';

const CommentWrite = (props: any) => {
  const [contents, setContents] = useState('');
  const [images, setImage] = useState([]);
  const { data: loginUser } = useQuery(FETCH_USER_LOGGEDIN);
  const [commentId, setCommentId] = useState('');

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onCommtentSubmit = async () => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: props.data?.fetchUseditem._id,
        },
      });
      Alert.alert('등록되었습니다.');
      setCommentId(result.data?.createUseditemQuestion._id);
    } catch (e: any) {
      Alert.alert(e.message);
    }
  };

  return (
    <>
      {/* <CommentList
        commentId={commentId}
        contents={contents}
        useditemId={props.data?.fetchUseditem._id}
      /> */}
      <CommentWriteUI
        setContents={setContents}
        onCommtentSubmit={onCommtentSubmit}
        data={props.data}
        loginUser={loginUser}
      />
    </>
  );
};

export default CommentWrite;
