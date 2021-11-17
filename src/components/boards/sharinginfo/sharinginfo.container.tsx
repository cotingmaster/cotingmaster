import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import SharinginfoUI from './sharinginfo.presenter';
import { FETCH_USEDITEMS } from '../board.query';

const SharinginfoContainer = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data, fetchMore } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1, isSoldout: false, search: '' },
  });
  const [sharingData, setSharingData] = useState({});

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(Number(data?.fetchUseditems.length / 10)),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  }

  useEffect(() => {
    const sharingBoardData = data?.fetchUseditems.filter(
      e => e.remarks === 'SharingInfo',
    );
    setSharingData(sharingBoardData);
  }, [data]);

  return (
    <SharinginfoUI
      sharingData={sharingData}
      onLoadMore={onLoadMore}
      setRefreshing={setRefreshing}
      refreshing={refreshing}
    />
  );
};

export default SharinginfoContainer;
