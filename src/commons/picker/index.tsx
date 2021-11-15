import React, { useState } from 'react';
import styled from '@emotion/native';
import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';
const Container = styled(View)`
  width: 180px;
  /* width: 45%; */
  /* elevation: 2; */
  /* border-width: 1px; */
  /* justify-content: center; */
  /* border-radius: 10px; */
  /* border: 1px solid black; */
`;
const Wrapper = styled(View)`
  elevation: 2;
  /* width: 200px; */
  margin-right: 33px;
  padding-top: 5px;
  /* border-right-width: 0.2; */
`;
export default function BoardPicker({ selectedValue, onValueChange }: any) {
  return (
    <Wrapper>
      {/* <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'black' }}> 장소 </Text>
      </View> */}
      <Container>
        <Picker
          selectedValue={selectedValue}
          onValueChange={itemValue => onValueChange(itemValue)}
          // dropdownIconColor='blue'
          mode="dialog"
          style={{ borderStyle: 'dashed' }}>
          <Picker.Item label=":집: 자유게시판" value="Freeboard" />
          <Picker.Item label=":사무실: 정보공유" value="SharingInfo" />
          <Picker.Item label=":학교: 만남" value="Meeting" />
        </Picker>
      </Container>
    </Wrapper>
  );
}
// multiline={true}
// import {
//   Wrapper,
//   MainTitle,
//   MainView,
//   Line,
//   Title,
//   LineView,
//   Line2,
//   Contents,
//   TopView,
//   Submit,
//   SubmitText,
// } from './SharinginfoWrite.styles';
// <Title
// onChangeText={props.setTitle}
// placeholder="제목을 입력해주세요."
// placeholderTextColor="black"></Title>
{
  /* <Wrapper>
<TopView>
  <MainView>
    <MainTitle>정보공유</MainTitle>
  </MainView>
  <Line></Line>
  <Title>
    <RNPickerSelect
      onValueChange={value => console.log(value)}
      items={[
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
      ]}
    />
  </Title>
  <LineView>
    <Line2></Line2>
  </LineView>
  <Contents
    onChangeText={props.setContents}
    placeholder="내용을 입력해주세요."
    placeholderTextColor="black"
    multiline={true}></Contents>
</TopView>
<Submit onPress={props.onPressSharingSubmit}>
  <SubmitText>등록하기</SubmitText>
</Submit>
</Wrapper> */
}
