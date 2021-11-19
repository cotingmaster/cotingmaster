import React from 'react';
import UpdateModalPage from '../../../src/commons/updateModal/updateModal.container';
import SharingInfoDetailContainer from '../../../src/components/boardsdetail/sharinginfodetail/sharinginfodetail.container';
import CommentList from '../../../src/components/comment/comment_list/CommentList.container';
import CommentWrite from '../../../src/components/comment/comment_write/CommentWrite.container';

const SharingInfoDetailScreen = ({ route }: any) => {
  return (
    <>
      <SharingInfoDetailContainer route={route} />
      <CommentWrite />
      {/* <CommentList /> */}
    </>
  );
};

export default SharingInfoDetailScreen;
