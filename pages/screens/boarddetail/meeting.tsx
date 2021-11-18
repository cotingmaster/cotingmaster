import React from 'react';
import MeetingDetailContainer from '../../../src/components/boardsdetail/meetingdetail/meetingdetail.container';
import CommentList from '../../../src/components/comment/comment_list/CommentList.container';
import CommentWrite from '../../../src/components/comment/comment_write/CommentWrite.container';

const MeetingDetailScreen = ({ route }: any) => {
  return (
    <>
      <MeetingDetailContainer route={route} />
      <CommentWrite />
      <CommentList />
    </>
  );
};

export default MeetingDetailScreen;
