import { gql } from '@apollo/client';

export const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      picture
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const FETCH_USEDITEM_ISOLD = gql`
  query fetchUseditemsISold($page: Int) {
    fetchUseditemsISold(page: $page) {
      _id
      name
      remarks
      price
      contents
      images
      createdAt
      seller {
        name
        picture
      }
      buyer {
        name
      }
    }
  }
`;

export const FETCH_USEDITEM_IPICKED = gql`
  query fetchUseditemsIPicked($search: String) {
    fetchUseditemsIPicked(search: $search) {
      _id
      name
      contents
      remarks
      price
      images
      seller {
        name
        picture
      }
      createdAt
    }
  }
`;
