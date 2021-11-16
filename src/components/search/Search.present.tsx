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

const SearchUI = (props: any) => {
  return (
    <ScrollView>
      <Wrapper>
        <TopView>
          <SearchImage source={require('../../../public/images/search.png')} />
          <Input
            placeholder="검색어를 입력해주세요."
            onChangeText={props.onChangeTextSearch}
          />
          <ButtonView onPress={props.onPressButton}>
            <ButtonText>검색</ButtonText>
          </ButtonView>
        </TopView>
        {props.data?.fetchUseditems.map((el: any) => (
          <DataView key={el._id}>
            <BoardTitle>
              <BoardText>{el.name}</BoardText>
            </BoardTitle>
            <ProfileView>
              <ProfileImage
                source={require('../../../public/images/defaultprofile2.png')}
              />
              <NameView>
                <Name>{el.seller.name}</Name>
                <Date>{el.createdAt.slice(0, 10)}</Date>
              </NameView>
            </ProfileView>
            <Contents>{el.contents}</Contents>
            <BottomView>
              <CommentView>
                <Comment
                  source={require('../../../public/images/comment.png')}
                />
                <CommentCount>3</CommentCount>
              </CommentView>
              <LikeView>
                <Like
                  source={require('../../../public/images/mylikeimage.png')}
                />
                <LikeCount>{el.pickedCount}</LikeCount>
              </LikeView>
            </BottomView>
            <Line></Line>
          </DataView>
        ))}
      </Wrapper>
    </ScrollView>
  );
};

export default SearchUI;
