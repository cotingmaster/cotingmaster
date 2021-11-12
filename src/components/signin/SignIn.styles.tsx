import styled from '@emotion/native';

export const S = {
  Container: styled.View`
    flex: 1;
    padding: 10px;
  `,
  LineBox: styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  `,
  InputLine: styled.TextInput`
    height: 50px;
    width: 400px;
    margin-right: 10px;
    border-bottom-color: gray;
    border-bottom-width: 1px;
  `,
  ShowText: styled.Text`
    /* height: 30px; */
    font-size: 18px;
  `,
  SubmitButton: styled.Button`
    flex: 1;
    height: 30px;
    font-size: 20px;
    color: aliceblue;
  `,
};
