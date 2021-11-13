import React from 'react';
import {
  Wrapper,
  MainTitle,
  MainView,
  Line,
  Title,
  LineView,
  Line2,
  Contents,
  TopView,
  Submit,
  SubmitText,
} from './SharinginfoWrite.styles';

const SharingInfoWriteUI = (props: any) => {
  return (
    <Wrapper>
      <TopView>
        <MainView>
          <MainTitle>정보공유</MainTitle>
        </MainView>
        <Line></Line>
        <Title
          placeholder="제목을 입력해주세요."
          placeholderTextColor="black"></Title>
        <LineView>
          <Line2></Line2>
        </LineView>
        <Contents
          placeholder="내용을 입력해주세요."
          placeholderTextColor="black"
          multiline={true}></Contents>
      </TopView>
      <Submit onPress={props.onClickSubmit}>
        <SubmitText>등록하기</SubmitText>
      </Submit>
    </Wrapper>
  );
};

export default SharingInfoWriteUI;

// multiline={true}
