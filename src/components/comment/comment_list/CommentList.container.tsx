import React from 'react';
import CommentListUI from './CommentList.present';
import {
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from './CommentList.query';
import { useQuery } from '@apollo/client';

const CommentList = (props: any) => {
  console.log('id', props.data?.fetchUseditem._id);
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: props.data?.fetchUseditem._id,
    },
  });
  console.log('b', data);
  // const { data: answersData } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
  //   variables: { },
  // });

  return <CommentListUI data={data} />;
};

export default CommentList;
