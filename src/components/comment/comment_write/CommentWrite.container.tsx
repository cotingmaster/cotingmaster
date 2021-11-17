import React, { useState } from 'react';
import CommentWriteUI from './CommentWrite.present';
import { useMutation, useQuery } from '@apollo/client';
import { Alert } from 'react-native';
import { CREATE_USED_ITEM_QUESTION } from './CommentWrite.query';

const CommentWrite = (props: any) => {
  const [contents, setContents] = useState('');
  const [images, setImage] = useState([]);

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onCommtentSubmit = async (route: any) => {
    const result = await createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents,
        },
        useditemId: props.data.fetchUseditem._id,
      },
    });
    Alert.alert('등록되었습니다.');
  };

  return (
    <CommentWriteUI
      setContents={setContents}
      onCommtentSubmit={onCommtentSubmit}
      data={props.data}
    />
  );
};

export default CommentWrite;
