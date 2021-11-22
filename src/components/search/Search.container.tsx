import React, { useState } from 'react';
import SearchUI from './Search.presenter';
import { gql, useQuery } from '@apollo/client';

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search: String, $page: Int) {
    fetchUseditems(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      images
      pickedCount
      createdAt
      seller {
        name
        picture
      }
    }
  }
`;

const SearchContainer = () => {
  const { data, refetch } = useQuery(FETCH_USED_ITEMS);

  const [mySearch, setMySearch] = useState('');

  function onPressSearch() {
    refetch({ search: mySearch });
  }

  return (
    <SearchUI
      data={data}
      setMySearch={setMySearch}
      onPressSearch={onPressSearch}
    />
  );
};

export default SearchContainer;
