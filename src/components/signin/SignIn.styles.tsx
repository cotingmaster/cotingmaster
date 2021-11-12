import styled from '@emotion/native';

export const S = {
  Container: styled.View`
    flex: 1;
    padding: 10px;
  `,
  LogoBackground: styled.View`
    margin-top: 50px;
    height: 90px;
    width: 100%;
    background-color: black;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Logo: styled.Image`
    margin: auto;
  `,

  InputLine: styled.TextInput`
    height: 50px;
    width: 100%;
    margin-top: 30px;
    margin-right: 10px;
    border-radius: 10px;
    border-color: gray;
    border-radius: 10px;
    border-width: 1px;
    padding-left: 10px;
    font-size: 18px;
  `,
  ShowText: styled.Text`
    /* height: 30px; */
    font-size: 18px;
  `,
  PressSubmit: styled.TouchableOpacity`
    margin: 10px;
    height: 30px;
    font-size: 20px;
    color: aliceblue;
  `,
};
