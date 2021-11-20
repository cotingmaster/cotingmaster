import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import FreeBoardDetailUI from './freeboarddetail.present';
import {
  FETCH_USEDITEM,
  TOGGLE_USED_ITEM_PICK,
  FETCH_USER_LOGGED_IN,
} from '../boarddetail.query';

const FreeBoardDetailContainer = ({ route }: any) => {
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);

  const { data, refetch } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(route.params.id),
    },
  });

  useEffect(() => {
    refetch({ useditemId: route.params.id });
  }, []);

  const { data: data1 } = useQuery(FETCH_USER_LOGGED_IN);

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

  const onPressUpdate = () => {
    setUpdateOpen((prev: any) => !prev);
  };

  return (
    <FreeBoardDetailUI
      data={data}
      data1={data1}
      onPressLike={onPressLike}
      onPressDelete={onPressDelete}
      onPressUpdate={onPressUpdate}
      deleteOpen={deleteOpen}
      setDeleteOpen={setDeleteOpen}
      updateOpen={updateOpen}
      setUpdateOpen={setUpdateOpen}
    />
  );
};

export default FreeBoardDetailContainer;
