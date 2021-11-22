import React, { useEffect, useState } from 'react';
import BoardDetailContainer from '../boarddetail.container';
// import { useMutation, useQuery } from '@apollo/client';
// import MeetingDetailUI from './meetingdetail.present';
// import {
//   FETCH_USEDITEM,
//   TOGGLE_USED_ITEM_PICK,
//   FETCH_USER_LOGGED_IN,
// } from '../boarddetail.query';

const MeetingDetailContainer = ({ route }: any) => {
  // const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  // const [deleteOpen, setDeleteOpen] = useState(false);
  // const [updateOpen, setUpdateOpen] = useState(false);

  // const { data, refetch } = useQuery(FETCH_USEDITEM, {
  //   variables: {
  //     useditemId: String(route.params.id),
  //   },
  // });

  // useEffect(() => {
  //   refetch({ useditemId: route.params.id });
  // }, []);

  // const { data: data1 } = useQuery(FETCH_USER_LOGGED_IN);

  // async function onPressLike() {
  //   await toggleUseditemPick({
  //     variables: { useditemId: String(route.params.id) },
  //     refetchQueries: [
  //       {
  //         query: FETCH_USEDITEM,
  //         variables: { useditemId: String(route.params.id) },
  //       },
  //     ],
  //   });
  // }

  // const onPressDelete = () => {
  //   setDeleteOpen((prev: any) => !prev);
  // };

  // const onPressUpdate = () => {
  //   setUpdateOpen((prev: any) => !prev);
  // };

  return (
    <BoardDetailContainer route={route} />
    // <MeetingDetailUI
    //   data={data}
    //   data1={data1}
    //   onPressLike={onPressLike}
    //   onPressUpdate={onPressUpdate}
    //   onPressDelete={onPressDelete}
    //   deleteOpen={deleteOpen}
    //   setDeleteOpen={setDeleteOpen}
    //   updateOpen={updateOpen}
    // />
  );
};

export default MeetingDetailContainer;
