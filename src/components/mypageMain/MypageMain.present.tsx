import React from 'react';
import { Wrapper, MainText, Button1 } from './MypageMain.styles';
import { useNavigation } from '@react-navigation/native';

const MyPageMainUI = ({ navigate }: any) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <MainText>여기는 마이페이지메인페이지입니다</MainText>
      <Button1
        title="프로필수정하기"
        onPress={() => navigation.navigate('프로필수정')}
      />
      <Button1
        title="내가누른좋아요"
        onPress={() => navigation.navigate('내가누른좋아요')}
      />
      <Button1
        title="내가쓴글보기"
        onPress={() => navigation.navigate('내가쓴글보기')}
      />
      <Button1
        title="동창회비 내역"
        onPress={() => navigation.navigate('동창회비내역')}
      />
    </Wrapper>
  );
};

export default MyPageMainUI;
