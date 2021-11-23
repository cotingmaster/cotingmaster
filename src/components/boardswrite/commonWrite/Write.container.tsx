import React, { useEffect, useRef, useState } from 'react';
import WriteUI from './Write.present';
import { useMutation } from '@apollo/client';
import { CREATE_USEDITEM, UPDATE_USEDITEM } from './Write.query';
import { useNavigation } from '@react-navigation/native';
// import { Formik } from 'formik';
import { Alert } from 'react-native';

const WriteContainer = (props: any) => {
  const navigation = useNavigation();
  const [createUsedItem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const [name, setName] = useState(''); //글제목
  const [remarks, setRemarks] = useState(props.board); //게시판
  const [contents, setContents] = useState('');
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(false);

  const onSubmit = async () => {
    if (!name || !remarks || !contents) {
      return Alert.alert('제목, 게시판, 내용을 입력해주세요');
    }

    const createUseditemInput = {
      name,
      remarks,
      price: Number(11),
      contents,
      images,
    };

    try {
      const result = await createUsedItem({
        variables: { createUseditemInput },
      });
      const boardDetail =
        remarks === 'Freeboard'
          ? '잡담게시판디테일'
          : remarks === 'SharingInfo'
          ? '정보공유게시판디테일'
          : '만남게시판디테일';
      navigation.push(boardDetail, {
        id: result.data?.createUseditem._id,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    if (props?.isEdit && props?.data?.fetchUseditem) {
      setName(props?.data?.fetchUseditem?.name);
      setRemarks(props?.data?.fetchUseditem?.remarks);
      setContents(props?.data?.fetchUseditem?.contents);
      setImages(props?.data?.fetchUseditem?.images);
    }
  }, [props?.isEdit, props?.data?.fetchUseditem]);

  const onUpdateSubmit = async () => {
    if (!name || !remarks || !contents) {
      return Alert.alert('제목, 게시판, 내용을 입력해주세요');
    }

    const myUpdateInput = {};
    if (name) myUpdateInput.name = name;
    if (contents) myUpdateInput.contents = contents;
    if (images) myUpdateInput.images = images;
    myUpdateInput.remarks = props.data?.fetchUseditem.remarks;
    myUpdateInput.price = Number(11);

    try {
      const result = await updateUseditem({
        variables: {
          useditemId: props.route.params.id,
          updateUseditemInput: myUpdateInput,
        },
      });
      Alert.alert('수정완료');
      const boardDetail =
        remarks === 'Freeboard'
          ? '잡담게시판디테일'
          : remarks === 'SharingInfo'
          ? '정보공유게시판디테일'
          : '만남게시판디테일';
      navigation.push(boardDetail, {
        id: result.data?.updateUseditem._id,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <WriteUI
      onSubmit={onSubmit}
      onUpdateSubmit={onUpdateSubmit}
      setTitle={setName}
      setContents={setContents}
      boards={remarks}
      setBoards={setRemarks}
      isEdit={props.isEdit}
      visible={visible}
      setVisible={setVisible}
      setImages={setImages}
      data={props.data}
    />
  );
};

export default WriteContainer;
