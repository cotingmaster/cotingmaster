import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/auth/signin';
import SignUpScreen from '../screens/auth/signup';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="로그인페이지" component={SignInScreen} />
      <Stack.Screen name="회원가입페이지" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
