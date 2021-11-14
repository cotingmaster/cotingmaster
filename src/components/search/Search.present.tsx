import React from 'react';
import {
  ScrollView,
  Wrapper,
  TopView,
  SearchImage,
  Input,
  ButtonView,
  ButtonText,
  DataView,
  BoardTitle,
  BoardText,
  ProfileView,
  ProfileImage,
  NameView,
  Name,
  Date,
  Contents,
  BottomView,
  CommentView,
  Comment,
  CommentCount,
  LikeView,
  Like,
  LikeCount,
  Line,
} from './Search.styles';

const SearchUI = () => {
  return (
    <ScrollView>
      <Wrapper>
        <TopView>
          <SearchImage source={require('../../../public/images/search.png')} />
          <Input placeholder="검색어를 입력해주세요." />
          <ButtonView>
            <ButtonText>검색</ButtonText>
          </ButtonView>
        </TopView>
        <DataView>
          <BoardTitle>
            <BoardText>정보공유</BoardText>
          </BoardTitle>
          <ProfileView>
            <ProfileImage
              source={require('../../../public/images/defaultprofile2.png')}
            />
            <NameView>
              <Name>이상혁</Name>
              <Date>2021.11.11</Date>
            </NameView>
          </ProfileView>
          <Contents>
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          </Contents>
          <BottomView>
            <CommentView>
              <Comment source={require('../../../public/images/comment.png')} />
              <CommentCount>3</CommentCount>
            </CommentView>
            <LikeView>
              <Like
                source={require('../../../public/images/mylikeimage.png')}
              />
              <LikeCount>3</LikeCount>
            </LikeView>
          </BottomView>
          <Line></Line>
        </DataView>
      </Wrapper>
    </ScrollView>
  );
};

export default SearchUI;
