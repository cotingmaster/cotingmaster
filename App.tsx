import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './pages/navigations/tabNavigator';
import type { Node } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { useState, createContext, useEffect } from 'react';
import { getAccessToken } from './src/commons/libraries/getAccessToken';
import { onError } from '@apollo/client/link/error';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigator from './pages/navigations/loginAuth';

//  const Tab = createBottomTabNavigator();
export const GlobalContext = React.createContext(null);

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({});

  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
  };

  useEffect(() => {
    AsyncStorage.getItem('user', (_: any, refreshToken: any) => {
      if (refreshToken) {
        setAccessToken(refreshToken);
      }
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === 'UNAUTHENTICATED') {
          operation.setContext({
            // 실행하려다가 토큰만료로 실패한 쿼리
            headers: {
              ...operation.getContext().headers, // 기존의 헤더 정보를 가져옴
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation); // 다시해줄 작업 (아까 그 쿼리 다시 날리기)
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: 'http://34.64.161.16/team02',
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {accessToken ? (
              <Stack.Screen name="tabNavigator" component={TabNavigator} />
            ) : (
              <Stack.Screen name="Login" component={AuthNavigator} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
};

export default App;
