import React from 'react';
import {
  LogoImg,
  LogoIcon,
  Wrapper,
  MainText,
  SharingInfo,
  Meeting,
  FreeBoard,
  SubText,
  MainBox,
  MainIcon,
} from './home.styles';
import { useNavigation } from '@react-navigation/native';

const HomeUI = ({ navigate }: any) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      {/* <TopView>
        <MainText>여기는 메인페이지입니다</MainText>
      </TopView> */}
      <LogoImg>
        <LogoIcon source={require('../../../public/images/coting.png')} />
      </LogoImg>
      <SharingInfo onPress={() => navigation.navigate('정보공유게시판')}>
        <MainBox>
          <MainText>정보공유</MainText>
          <SubText>취업정보, IT관련 ...</SubText>
        </MainBox>
        <MainIcon source={require('../../../public/images/arrow.png')} />
      </SharingInfo>
      <Meeting onPress={() => navigation.navigate('만남게시판')}>
        <MainBox>
          <MainText>만남</MainText>
          <SubText>만날사람모여라~</SubText>
        </MainBox>
        <MainIcon source={require('../../../public/images/arrow.png')} />
      </Meeting>
      <FreeBoard onPress={() => navigation.navigate('커뮤니티게시판')}>
        <MainBox>
          <MainText>커뮤니티</MainText>
          <SubText>자유게시물, 일상 ...</SubText>
        </MainBox>
        <MainIcon source={require('../../../public/images/arrow.png')} />
      </FreeBoard>
    </Wrapper>
  );
};
export default HomeUI;

{
  /* <Button1
        title="정보공유게시판가기"
        onPress={() => navigation.navigate('정보공유게시판')}
      />
      <Button1
        title="만남게시판가기"
        onPress={() => navigation.navigate('만남게시판')}
      />
      <Button1
        title="커뮤니티게시판가기"
        onPress={() => navigation.navigate('커뮤니티게시판')}
      /> */
}
