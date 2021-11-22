import React from 'react';
import {
  LogoImg,
  LogoIcon,
  Wrapper,
  MainText,
  TouchBox,
  BoardTitle,
  SubText,
  MainBox,
  MainIcon,
} from './home.styles';
import { useNavigation } from '@react-navigation/native';

const HomeUI = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <LogoImg>
        <LogoIcon source={require('../../../public/images/coting.png')} />
      </LogoImg>
      <TouchBox onPress={() => navigation.navigate('정보공유게시판')}>
        <BoardTitle name="information-circle" size={27} />
        <MainBox>
          <MainText>정보</MainText>
          <SubText>취업정보, IT지식 공유해~</SubText>
        </MainBox>
        <MainIcon name="md-chevron-forward" size={40} />
      </TouchBox>
      <TouchBox onPress={() => navigation.navigate('만남게시판')}>
        <BoardTitle name="beer" size={27} />
        <MainBox>
          <MainText>만남</MainText>
          <SubText>만날사람 모여라~</SubText>
        </MainBox>
        <MainIcon name="md-chevron-forward" size={40} />
      </TouchBox>
      <TouchBox onPress={() => navigation.navigate('잡담게시판')}>
        <BoardTitle name="chatbubbles" size={27} />
        <MainBox>
          <MainText>잡담</MainText>
          <SubText>자유롭게 일상을 말해줘~</SubText>
        </MainBox>
        <MainIcon name="md-chevron-forward" size={40} />
      </TouchBox>
    </Wrapper>
  );
};
export default HomeUI;
