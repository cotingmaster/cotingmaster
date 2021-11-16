import { gql } from '@apollo/client';

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
      createdAt
      updatedAt
      seller {
        _id
        name
        picture
      }
    }
  }
`;
