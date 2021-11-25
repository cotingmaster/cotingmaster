import React from 'react';
import { ScrollView } from 'react-native';
import FreeBoardDetailContainer from '../../../src/components/boardsdetail/freeboarddetail/freeboarddetail.container';
import CommentList from '../../../src/components/comment/comment_list/CommentList.container';
import CommentWrite from '../../../src/components/comment/comment_write/CommentWrite.container';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      user {
        name
        picture
      }
      contents
      createdAt
    }
  }
`;

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      createdAt
      updatedAt
      pickedCount
      remarks
      contents
      price
      images
      seller {
        name
        picture
      }
    }
  }
`;
const FreeBoardDetailScreen = ({ route }: any) => {
  const [QId, setQId] = useState('');
  const [openReply, setOpenReply] = useState(false);

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(route.params.id) },
  });

  const { data: usedItemdata, refetch } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(route.params.id),
    },
  });

  return (
    <ScrollView>
      <FreeBoardDetailContainer
        route={route}
        openReply={openReply}
        setOpenReply={setOpenReply}
      />
      {openReply && (
        <CommentWrite usedItemdata={usedItemdata} setQId={setQId} />
      )}
      {data?.fetchUseditemQuestions.map(el => (
        <CommentList
          QId={QId}
          usedItemdata={usedItemdata}
          refetch={refetch}
          key={el._id}
          el={el}
          id={el._id}
        />
      ))}
    </ScrollView>
  );
};

export default FreeBoardDetailScreen;
