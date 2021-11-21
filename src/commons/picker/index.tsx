import React, { useState } from 'react';
import styled from '@emotion/native';
import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';
import { S } from './picker.styles';

export default function BoardPicker({ selectedValue, onValueChange }: any) {
  return (
    <S.Wrapper>
      {/* <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'black' }}> 장소 </Text>
      </View> */}
      <S.PickerContainer
        selectedValue={selectedValue}
        onValueChange={itemValue => onValueChange(itemValue)}
        dropdownIconColor="#FFD600"
        mode="dropdown"
        style={{ borderStyle: 'dashed' }}
        itemStyle={{ fontFamily: 'GamjaFlower-Regular' }}>
        <S.PickerItem label="잡담" value="Freeboard" />
        <S.PickerItem label="정보" value="SharingInfo" />
        <S.PickerItem label="만남" value="Meeting" />
      </S.PickerContainer>
    </S.Wrapper>
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
