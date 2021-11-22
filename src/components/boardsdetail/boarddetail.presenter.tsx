import React from 'react';
import { S } from './boarddetail.styles';
import { useNavigation } from '@react-navigation/native';
import DeleteModalPage from '../../commons/deleteModal/deleteModal.container';
import UpdateModalPage from '../../commons/updateModal/updateModal.container';

const BoardDetailUI = (props: any) => {
  const navigation = useNavigation();
  return (
    <>
      <S.ScrollView>
        <S.Wrapper>
          <S.TopView>
            <S.TopLeft>
              {props.data?.fetchUseditem.seller.picture ? (
                <S.ProfileImage
                  source={{ uri: props.data?.fetchUseditem.seller.picture }}
                />
              ) : (
                <S.PersonIcon name="person-circle-outline" size={50} />
              )}
              <S.NameView>
                <S.Name>{props.data?.fetchUseditem.seller.name}</S.Name>
                <S.Date>
                  {props.data?.fetchUseditem.createdAt.slice(0, 10)}
                </S.Date>
              </S.NameView>
            </S.TopLeft>
            <S.LikeView>
              <S.LikeButton onPress={props.onPressLike}>
                <S.Like>♥</S.Like>
              </S.LikeButton>
              <S.LikeSu>{props.data?.fetchUseditem.pickedCount}</S.LikeSu>
            </S.LikeView>
          </S.TopView>

          <S.TopImage source={{ uri: props.data?.fetchUseditem.images[0] }} />
          <S.MainView>
            <S.TopRight>
              <S.Title>{props.data?.fetchUseditem.name}</S.Title>
              {props.data?.fetchUseditem.seller.email ===
                props.data1?.fetchUserLoggedIn.email && (
                <S.IoniconsView>
                  <S.UpdateView onPress={props.onPressUpdate}>
                    <S.Ionicons name="create" color={'pink'} size={24} />
                    <S.ModalView>
                      {props.updateOpen && (
                        <UpdateModalPage data={props.data} />
                      )}
                    </S.ModalView>
                  </S.UpdateView>
                  <S.DeleteView onPress={props.onPressDelete}>
                    <S.Ionicons name="trash" color={'pink'} size={24} />
                    <S.ModalView>
                      {props.deleteOpen && (
                        <DeleteModalPage
                          deleteOpen={props.deleteOpen}
                          setDeleteOpen={props.setDeleteOpen}
                          data={props.data}
                        />
                      )}
                    </S.ModalView>
                  </S.DeleteView>
                </S.IoniconsView>
              )}
            </S.TopRight>

            <S.Contents>{props.data?.fetchUseditem.contents}</S.Contents>
          </S.MainView>
        </S.Wrapper>
      </S.ScrollView>
    </>
  );
};

export default BoardDetailUI;
