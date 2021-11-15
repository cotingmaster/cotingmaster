import React from 'react';
import { useQuery } from '@apollo/client';
import MeetingDetailUI from './meetingdetail.present';
import { FETCH_USEDITEM } from '../boarddetail.query';

const MeetingDetailContainer = ({ route }: any) => {
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(route.params.id),
    },
  });

  return <MeetingDetailUI data={data} />;
};

export default MeetingDetailContainer;
