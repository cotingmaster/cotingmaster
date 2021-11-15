import React from 'react';
import { useQuery } from '@apollo/client';
import FreeBoardDetailUI from './freeboarddetail.present';
import { FETCH_USEDITEM } from '../boarddetail.query';

const FreeBoardDetailContainer = ({ route }: any) => {
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(route.params.id),
    },
  });

  return <FreeBoardDetailUI data={data} />;
};

export default FreeBoardDetailContainer;
