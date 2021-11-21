import React, { useState } from 'react';
import CommentWriteUI from './CommentWrite.present';
import { useMutation, useQuery } from '@apollo/client';
import { Alert } from 'react-native';
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from './CommentWrite.query';

const CommentWrite = (props: any) => {
  const [contents, setContents] = useState('');

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onCommtentSubmit = async (route: any) => {
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
      onCommtentSubmit={onCommtentSubmit}
      usedItemdata={props.usedItemdata}
      contents={contents}
    />
  );
};

export default CommentWrite;
