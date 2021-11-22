import React, { useState } from 'react';
import CommentWriteUI from './CommentWrite.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { Alert } from 'react-native';
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USER_LOGGEDIN,
} from './CommentWrite.query';

const CommentWrite = (props: any) => {
  const { data: loginData } = useQuery(FETCH_USER_LOGGEDIN);
  const [contents, setContents] = useState('');

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onCommentSubmit = async ({ route }: any) => {
    const result = await createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents,
        },

        useditemId: props.usedItemdata.fetchUseditem._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: { useditemId: props.usedItemdata.fetchUseditem._id },
        },
      ],
    });
    // Alert.alert('등록되었습니다.');
    setContents('');
    props.setQId(result.data.createUseditemQuestion._id);
  };

  return (
    <CommentWriteUI
      setContents={setContents}
      onCommentSubmit={onCommentSubmit}
      usedItemdata={props.usedItemdata}
      contents={contents}
      loginData={loginData}
    />
  );
};

export default CommentWrite;
