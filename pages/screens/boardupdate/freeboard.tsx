import React from 'react';
import FreeBoardWriteContainer from '../../../src/components/boardswrite/FreeboardWrite/FreeboardWrite.container';
import { FETCH_USEDITEM } from '../../../src/components/boardsdetail/boarddetail.query';
import { useQuery } from '@apollo/client';

const FreeBoardUpdateScreen = ({ route }: any) => {
  const { data, refetch } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(route.params.id),
    },
  });
  return <FreeBoardWriteContainer route={route} isEdit={true} data={data} />;
};

export default FreeBoardUpdateScreen;
