import React from 'react';
import {
  Wrapper,
  MainTitle,
  Submit,
  SubmitText,
  Line,
  Contents,
  TextSubmitBox,
} from './FreeboardWrite.styles';

const FreeBoardWriteUI = (props: any) => {
  return (
    <Wrapper>
      <TextSubmitBox>
        <MainTitle>커뮤니티</MainTitle>
        <Line></Line>
        <Contents
          placeholder="제목을 입력하세요"
          onChangeText={props.setTitle}
        />
        <Contents
          placeholder="내용을 입력하세요"
          onChangeText={props.setContents}
          multiline={true}
        />
      </TextSubmitBox>
      <Submit onPress={props.onClickFreeBoardSubmit}>
        <SubmitText>등록하기</SubmitText>
      </Submit>
    </Wrapper>
  );
};

export default FreeBoardWriteUI;
