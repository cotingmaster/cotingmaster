import { gql } from '@apollo/client';
import { GraphQLClient } from 'graphql-request';
import { Dispatch, SetStateAction } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 토큰 재발급
const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
// 1. refreshToken으로 새로운 accessToken 재발급 받기
export async function getAccessToken(
  setAccessToken: Dispatch<SetStateAction<string>>,
) {
  try {
    const graphQLClient = new GraphQLClient('http://34.64.161.16/team02', {
      credentials: 'include',
    });

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    AsyncStorage.setItem('user', newAccessToken);
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.log('refreshToken', error);
  }
}
