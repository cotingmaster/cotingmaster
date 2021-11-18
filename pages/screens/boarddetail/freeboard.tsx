import React from 'react';
import { ScrollView } from 'react-native';
import FreeBoardDetailContainer from '../../../src/components/boardsdetail/freeboarddetail/freeboarddetail.container';
import CommentList from '../../../src/components/comment/comment_list/CommentList.container';
import CommentWrite from '../../../src/components/comment/comment_write/CommentWrite.container';

const FreeBoardDetailScreen = ({ route }: any) => {
  return (
    <ScrollView>
      <FreeBoardDetailContainer route={route} />
      <CommentWrite />
      <CommentList />
    </ScrollView>
  );
};

export default FreeBoardDetailScreen;
