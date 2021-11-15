import { gql } from '@apollo/client';

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      createdAt
      remarks
      contents
      price
      images
      seller {
        name
        picture
      }
    }
  }
`;
