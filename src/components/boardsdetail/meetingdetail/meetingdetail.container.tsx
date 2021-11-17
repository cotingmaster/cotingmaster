import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import MeetingDetailUI from './meetingdetail.present';
import { FETCH_USEDITEM, TOGGLE_USED_ITEM_PICK } from '../boarddetail.query';

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

  return <MeetingDetailUI data={data} onPressLike={onPressLike} />;
};

export default MeetingDetailContainer;
