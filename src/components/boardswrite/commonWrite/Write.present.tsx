import React from 'react';
import {
  Wrapper,
  TextSubmitBox,
  BoardTitle,
  TitleWrapper,
  MainTitle,
  Submit,
  SubmitText,
  PickerText,
  Line,
  Title,
  Contents,
  PressWrapper,
  PhotoAddButton,
} from './Write.styles';
import BoardPicker from '../../../commons/picker';
import UploadPhotos from '../../../commons/uploadPhotos';

const WriteUI = (props: any) => {
  return (
    <Wrapper>
      <TextSubmitBox>
        <TitleWrapper>
          <BoardTitle
            name={
              props.boards === 'Freeboard'
                ? 'chatbubbles'
                : props.boards === 'SharingInfo'
                ? 'information-circle'
                : 'beer'
            }
            size={30}
          />
          <MainTitle>
            {props.boards === 'Freeboard'
              ? '잡담'
              : props.boards === 'SharingInfo'
              ? '정보'
              : '만남'}
          </MainTitle>
        </TitleWrapper>
        <Line>
          <BoardPicker
            selectedValue={props.boards}
            onValueChange={props.setBoards}
          />
          <PickerText>게시판을 선택할 수 있습니다</PickerText>
        </Line>
        <Title
          placeholder="제목을 입력하세요"
          onChangeText={props.setTitle}
          defaultValue={props.data?.fetchUseditem.name}
        />
        <Contents
          placeholder="내용을 입력하세요"
          defaultValue={props.data?.fetchUseditem.contents}
          onChangeText={props.setContents}
          multiline={true}
        />
      </TextSubmitBox>
      <PressWrapper onPress={() => props.setVisible(true)}>
        <PhotoAddButton name="add-a-photo" size={35} />
        <UploadPhotos
          visible={props.visible}
          setVisible={props.setVisible}
          setImages={props.setImages}
          imgages={props.data?.fetchUseditem.images}
        />
      </PressWrapper>
      {!props.isEdit && (
        <Submit onPress={props.onSubmit}>
          <SubmitText>등록하기</SubmitText>
        </Submit>
      )}
      {props.isEdit && (
        <Submit onPress={props.onUpdateSubmit}>
          <SubmitText>수정하기</SubmitText>
        </Submit>
      )}
    </Wrapper>
  );
};

export default WriteUI;
