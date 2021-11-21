import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { DELETE_USED_ITEM } from './deleteModal.query';
import { useNavigation } from '@react-navigation/native';

const DeleteModalPage = (props: any) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

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
      Alert.alert('게시물이삭제되었습니다');
      navigation.navigate(boardDetail);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onPressButton}>
              <Text style={styles.textStyle}>삭제확인</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>삭제취소</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>삭제하시겠습니까?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: 150,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginBottom: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default DeleteModalPage;
