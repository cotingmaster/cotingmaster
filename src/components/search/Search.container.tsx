import React, { useState } from 'react';
import SearchUI from './Search.present';
import { gql, useQuery } from '@apollo/client';

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search: String, $page: Int) {
    fetchUseditems(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      pickedCount
      createdAt
      seller {
        name
      }
    }
  }
`;

const SearchContainer = () => {
  const { data, refetch } = useQuery(FETCH_USED_ITEMS);

  const [mySearch, setMySearch] = useState('');

  function onChangeTextSearch(value: any) {
    setMySearch(value);
  }

  function onPressButton() {
    refetch({ search: mySearch });
  }

  return (
    <SearchUI
      data={data}
      onChangeTextSearch={onChangeTextSearch}
      onPressButton={onPressButton}
    />
  );
};

export default SearchContainer;
