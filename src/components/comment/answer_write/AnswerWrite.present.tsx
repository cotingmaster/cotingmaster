import React from 'react';
import { Text, View } from 'react-native';
import { CommentContents } from './AnswerWrite.styles';

const AnswerWriteUI = (props: any) => {
  return (
    <View>
      <CommentContents
        onChangeText={props.setContents}
        placeholder="댓글을 입력하세요"
        value={props.contents}
      />
    </View>
  );
};
export default AnswerWriteUI;
