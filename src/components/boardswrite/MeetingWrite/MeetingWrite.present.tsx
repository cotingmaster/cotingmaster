import React from 'react';
import {
  Wrapper,
  MainTitle,
  Line,
  MapView,
  MapImage,
  Date,
  Location,
  Title,
  Contents,
  ScrollView,
  TopView,
  Submit,
  SubmitText,
} from './MeetingWrite.styles';

const MeetingWriteUI = (props: any) => {
  return (
    <ScrollView>
      <Wrapper>
        <TopView>
          <MainTitle>만남</MainTitle>
          <Line></Line>
          <MapView>
            <MapImage source={require('../../../../public/images/map.png')} />
          </MapView>
          <Date
            onChangeText={props.setMeetingDate}
            placeholder="모임날짜를 입력해주세요. ex) 2021.11.02"
            placeholderTextColor="black"></Date>
          <Location
            onChangeText={props.setMeetingAddress}
            placeholder="모임장소를 입력해주세요."
            placeholderTextColor="black"></Location>
          <Title
            onChangeText={props.setTitle}
            placeholder="제목을 입력해주세요."
            placeholderTextColor="black"></Title>
          <Contents
            onChangeText={props.setContents}
            placeholder="내용을 입력해주세요."
            placeholderTextColor="black"
            multiline={true}></Contents>
        </TopView>
        <Submit>
          <SubmitText onPress={props.onPressMeetingSubmit}>등록하기</SubmitText>
        </Submit>
      </Wrapper>
    </ScrollView>
  );
};

export default MeetingWriteUI;
