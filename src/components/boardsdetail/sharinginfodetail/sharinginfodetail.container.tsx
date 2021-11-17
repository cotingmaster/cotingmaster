import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import SharingInfodDetailUI from './sharinginfodetail.present';
import { FETCH_USEDITEM, TOGGLE_USED_ITEM_PICK } from '../boarddetail.query';

const SharingInfoDetailContainer = ({ route }: any) => {
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

  return <SharingInfodDetailUI data={data} onPressLike={onPressLike} />;
};
export default SharingInfoDetailContainer;
