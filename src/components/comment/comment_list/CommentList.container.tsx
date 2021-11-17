import React from 'react';
import CommentListUI from './CommentList.present';
import { FETCH_USEDITEM_QUESTIONS } from './CommentList.query';
import { useQuery } from '@apollo/client';

const CommentList = (props: any) => {
  console.log('111', props.commentId);
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      page: 1,
      useditemId: String(props.useditemId),
    },
  });

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  }

  // const { data: answersData } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
  //   variables: { },
  // });

  return (
    <CommentListUI
      data={data?.fetchUseditemQuestions}
      onLoadMore={onLoadMore}
      contents={props.contents}
    />
  );
};

export default CommentList;
