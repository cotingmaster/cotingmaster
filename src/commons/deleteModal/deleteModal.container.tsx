import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { DELETE_USED_ITEM } from './deleteModal.query';
import { useNavigation } from '@react-navigation/native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

const DeleteModalPage = (props: any) => {
  const navigation = useNavigation();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  async function onPressButton() {
    const boardDetail =
      props.data?.fetchUseditem.remarks === 'Freeboard'
        ? '잡담게시판'
        : props.data?.fetchUseditem.remarks === 'SharingInfo'
        ? '정보공유게시판'
        : '만남게시판';
    try {
      await deleteUseditem({
        variables: { useditemId: props.data?.fetchUseditem._id },
      });
      Alert.alert('삭제되었습니다');
      navigation.navigate(boardDetail);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  return (
    <View style={styles.centeredView}>
      <Text style={styles.longText}>삭제하시겠습니까?</Text>

      <View style={styles.pinkLine}></View>
      <View style={styles.flexRow}>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={onPressButton}>
          <Text style={[styles.textStyle, styles.pinkRight]}>확인</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => props.setDeleteOpen(false)}>
          <Text style={styles.textStyle}>취소</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: 200,
    height: 100,
    alignItems: 'center',
    marginTop: 22,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    opacity: 0.93,
    borderRadius: 10,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    // padding: 10,
  },
  buttonClose: {
    // marginBottom: 10,
  },
  pinkLine: {
    width: 200,
    borderTopWidth: 1,
    borderTopColor: 'pink',
  },
  longText: {
    width: 200,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 50,
    textAlignVertical: 'center',
  },
  textStyle: {
    width: 100,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 50,
    textAlignVertical: 'center',
  },
  pinkRight: {
    borderRightColor: 'pink',
    borderRightWidth: 1,
  },
});

export default DeleteModalPage;
