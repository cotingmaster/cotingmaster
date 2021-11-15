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
      createdAt
      seller {
        name
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
      price
      seller {
        name
      }
      buyer {
        name
      }
      createdAt
    }
  }
`;
