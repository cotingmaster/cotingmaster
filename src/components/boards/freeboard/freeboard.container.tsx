import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import FreeBoardUI from './freeboard.present';
import { FETCH_USEDITEMS } from './freeboard.query';

const FreeBoardContainer = () => {
  const { data, fetchMore } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1, isSoldout: false },
  });
  const [freeData, setFreeData] = useState({});

  useEffect(() => {
    const freeboardData = data?.fetchUseditems.filter(
      e => e.remarks === 'Freeboard',
    );
    setFreeData(freeboardData);
  }, [data]);

  console.log('aaa', freeData);

  return <FreeBoardUI freeData={freeData} />;
};

export default FreeBoardContainer;
