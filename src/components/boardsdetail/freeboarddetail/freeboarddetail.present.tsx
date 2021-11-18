import React from 'react';
import {
  ScrollView,
  Wrapper,
  TopImage,
  MainView,
  TopView,
  TopLeft,
  ProfileImage,
  NameView,
  Name,
  Date,
  TopRight,
  LikeView,
  LikeButton,
  Like,
  LikeSu,
  IoniconsView,
  UpdateView,
  DeleteView,
  Title,
  Contents,
  ModalView,
} from './freeboarddetail.styles';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeleteModal from '../../../commons/deleteModal/deleteModal.container';

const FreeBoardDetailUI = (props: any) => {
  const navigation = useNavigation();
  return (
    <>
      <Wrapper>
        <TopImage></TopImage>
        <MainView>
          <TopView>
            <TopLeft>
              <ProfileImage
                source={require('../../../../public/images/defaultprofile2.png')}
              />
              <NameView>
                <Name>{props.data?.fetchUseditem.seller.name}</Name>
                <Date>{props.data?.fetchUseditem.createdAt.slice(0, 10)}</Date>
              </NameView>
            </TopLeft>
            <ModalView>
              {props.deleteOpen && (
                <DeleteModal
                  deleteOpen={props.deleteOpen}
                  setDeleteOpen={props.setDeleteOpen}
                  data={props.data}
                />
              )}
            </ModalView>
            <TopRight>
              <LikeView>
                <LikeButton onPress={props.onPressLike}>
                  <Like>♥</Like>
                </LikeButton>
                <LikeSu>{props.data?.fetchUseditem.pickedCount}</LikeSu>
              </LikeView>
              <IoniconsView>
                <UpdateView>
                  <Ionicons name="create" color={'pink'} size={30} />
                </UpdateView>
                <DeleteView onPress={props.onPressDelete}>
                  <Ionicons name="trash" color={'pink'} size={28} />
                </DeleteView>
              </IoniconsView>
            </TopRight>
          </TopView>
          <Title>{props.data?.fetchUseditem.name}</Title>
          <Contents>{props.data?.fetchUseditem.contents}</Contents>
        </MainView>
      </Wrapper>
    </>
  );
};

export default FreeBoardDetailUI;
