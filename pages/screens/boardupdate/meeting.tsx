import React from 'react';
import MeetingWriteContainer from '../../../src/components/boardswrite/MeetingWrite/MeetingWrite.container';
import { FETCH_USEDITEM } from '../../../src/components/boardsdetail/boarddetail.query';
import { useQuery } from '@apollo/client';

const MeetingUpdateScreen = ({ route }: any) => {
  const { data, refetch } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(route.params.id),
    },
  });
  return <MeetingWriteContainer route={route} isEdit={true} data={data} />;
};

export default MeetingUpdateScreen;
