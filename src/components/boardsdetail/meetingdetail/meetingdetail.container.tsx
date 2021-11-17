import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import MeetingDetailUI from './meetingdetail.present';
import { FETCH_USEDITEM, TOGGLE_USED_ITEM_PICK } from '../boarddetail.query';
import CommentWrite from '../../comment/comment_write/CommentWrite.container';
import CommentList from '../../comment/comment_list/CommentList.container';
import { ScrollView } from 'react-native';

const MeetingDetailContainer = ({ route }: any) => {
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(route.params.id),
    },
  });

  async function onPressLike() {
    await toggleUseditemPick({
      variables: { useditemId: String(route.params.id) },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: String(route.params.id) },
        },
      ],
    });
  }

  return (
    <ScrollView>
      <MeetingDetailUI data={data} onPressLike={onPressLike} />
      <CommentWrite data={data} />
      <CommentList data={data} />
    </ScrollView>
  );
};

export default MeetingDetailContainer;
