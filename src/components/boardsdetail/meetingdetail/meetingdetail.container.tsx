import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import MeetingDetailUI from './meetingdetail.present';
import { FETCH_USEDITEM, TOGGLE_USED_ITEM_PICK } from '../boarddetail.query';
import CommentWrite from '../../comment/comment_write/CommentWrite.container';
import CommentList from '../../comment/comment_list/CommentList.container';
import { ScrollView } from 'react-native';

const MeetingDetailContainer = ({ route }: any) => {
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const [deleteOpen, setDeleteOpen] = useState(false);

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

  const onPressDelete = () => {
    setDeleteOpen((prev: any) => !prev);
  };

  return (
    <ScrollView>
      <MeetingDetailUI
        data={data}
        onPressLike={onPressLike}
        onPressDelete={onPressDelete}
        deleteOpen={deleteOpen}
        setDeleteOpen={setDeleteOpen}
      />
      <CommentWrite data={data} />
      <CommentList data={data} />
    </ScrollView>
  );
};

export default MeetingDetailContainer;
