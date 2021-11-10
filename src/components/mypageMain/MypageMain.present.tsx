import React from 'react';
import {
  Wrapper,
  // Button1,
  ProfileDefault,
  NickNameView,
  NickName,
  Logout,
  LogoutText,
  ProfileUpdateView,
  ProfileUpdateText,
  Line,
  MyLikeView,
  MyLikeImage,
  MyLikeTitle,
  MyBoardsView,
  MyBoardsImage,
  MyBoardsTitle,
  MyMoneyView,
  MyMoneyImage,
  MyMoneyTitle,
} from './MypageMain.styles';
import { useNavigation } from '@react-navigation/native';

const MyPageMainUI = ({ navigate }: any) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <ProfileDefault
        source={require('../../../public/images/defaultprofile.png')}
      />
      <NickNameView>
        <NickName>심심해해해햏해해</NickName>
        <Logout>
          <LogoutText>로그아웃</LogoutText>
        </Logout>
      </NickNameView>
      <ProfileUpdateView onPress={() => navigation.navigate('프로필수정')}>
        <ProfileUpdateText>프로필수정하기</ProfileUpdateText>
      </ProfileUpdateView>
      <Line></Line>
      <MyLikeView>
        <MyLikeImage
          source={require('../../../public/images/mylikeimage.png')}
        />
        <MyLikeTitle onPress={() => navigation.navigate('내가누른좋아요')}>
          내가 누른 좋아요!
        </MyLikeTitle>
      </MyLikeView>
      <MyBoardsView>
        <MyBoardsImage
          source={require('../../../public/images/myboardsimage.png')}
        />
        <MyBoardsTitle onPress={() => navigation.navigate('내가쓴글보기')}>
          내가 쓴 글 보기!
        </MyBoardsTitle>
      </MyBoardsView>
      <MyMoneyView>
        <MyMoneyImage
          source={require('../../../public/images/mymoneyimage.png')}
        />
        <MyMoneyTitle onPress={() => navigation.navigate('동창회비내역')}>
          동창회비 내역
        </MyMoneyTitle>
      </MyMoneyView>
    </Wrapper>
  );
};

export default MyPageMainUI;

{
  /* <Button1
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
      /> */
}
