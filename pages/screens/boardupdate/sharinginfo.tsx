import React from 'react';
import SharingInfoWriteContainer from '../../../src/components/boardswrite/SharinginfoWrite/SharinginfoWrite.container';
import { FETCH_USEDITEM } from '../../../src/components/boardsdetail/boarddetail.query';
import { useQuery } from '@apollo/client';

const SharingInfoUpdateScreen = ({ route }: any) => {
  const { data, refetch } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(route.params.id),
    },
  });
  return <SharingInfoWriteContainer route={route} isEdit={true} data={data} />;
};

export default SharingInfoUpdateScreen;
