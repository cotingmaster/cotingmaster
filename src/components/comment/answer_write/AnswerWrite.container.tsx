import React, { useState } from 'react';
import AnswerWriteUI from './AnswerWrite.present';
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from './AnswerWrite.query';
import { useMutation, useQuery } from '@apollo/client';

const AnswerWrite = (props: any) => {
  const [contents, setContents] = useState('');
  const [createUseditemQuestionAnswers] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER,
  );
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS);

  const onPressAnswer = async () => {
    console.log(props.el._id);
    const result = await createUseditemQuestionAnswers({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents,
        },
        useditemQuestionId: props.el._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTION_ANSWERS,
          variables: { useditemQuestionId: props.el._id },
        },
      ],
    });
    props.setIsAnswer(false);
    setContents('');
  };

  return (
    <AnswerWriteUI
      contents={contents}
      setContents={setContents}
      onPressAnswer={onPressAnswer}
    />
  );
};

export default AnswerWrite;
