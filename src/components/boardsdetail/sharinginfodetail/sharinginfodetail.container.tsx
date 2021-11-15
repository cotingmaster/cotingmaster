import React from 'react';
import { useQuery } from '@apollo/client';
import SharingInfodDetailUI from './sharinginfodetail.present';
import { FETCH_USEDITEM } from '../boarddetail.query';

const SharingInfoDetailContainer = ({ route }: any) => {
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(route.params.id),
    },
  });
  return <SharingInfodDetailUI data={data} />;
};
export default SharingInfoDetailContainer;
