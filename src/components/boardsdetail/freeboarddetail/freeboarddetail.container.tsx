import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import FreeBoardDetailUI from './freeboarddetail.present';
import { FETCH_USEDITEM, TOGGLE_USED_ITEM_PICK } from '../boarddetail.query';
import CommentWrite from '../../comment/comment_write/CommentWrite.container';
import CommentList from '../../comment/comment_list/CommentList.container';
import { View } from 'react-native';

const FreeBoardDetailContainer = ({ route }: any) => {
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
    <FreeBoardDetailUI
      data={data}
      onPressLike={onPressLike}
      onPressDelete={onPressDelete}
      deleteOpen={deleteOpen}
      setDeleteOpen={setDeleteOpen}
    />
  );
};

export default FreeBoardDetailContainer;
