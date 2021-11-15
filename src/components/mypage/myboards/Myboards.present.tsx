import React from 'react';
import {
  Wrapper,
  MainView,
  MainTitle,
  BoardTitleView,
  BoardTitle,
  Contents,
  BottomView,
  CommentView,
  CommentImage,
  CommentCount,
  LikeView,
  LikeImage,
  LikeCount,
  Line,
} from './Myboards.styles';
import { View } from 'react-native';

const MyBoardsUI = (props: any) => {
  return (
    <Wrapper>
      <MainView>
        <MainTitle>내가 쓴 글 보기</MainTitle>
      </MainView>
      <View>
        <BoardTitleView>
          <BoardTitle>만남</BoardTitle>
        </BoardTitleView>
        <Contents>
          가나다라마바사아자차카타파하가나다라마바사아자차카하하하하
          가나다라마바사아자차카타파하가나다라마바사아자차카하하하하
        </Contents>
        <BottomView>
          <CommentView>
            <CommentImage
              source={require('../../../../public/images/comment.png')}
            />
            <CommentCount>3</CommentCount>
          </CommentView>
          <LikeView>
            <LikeImage
              source={require('../../../../public/images/mylikeimage.png')}
            />
            <LikeCount>8</LikeCount>
          </LikeView>
        </BottomView>
        <Line></Line>
      </View>
    </Wrapper>
  );
};

export default MyBoardsUI;
