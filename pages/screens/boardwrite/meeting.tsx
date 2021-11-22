import React from 'react';
import MeetingWriteContainer from '../../../src/components/boardswrite/MeetingWrite/MeetingWrite.container';

const MeetingWriteScreen = ({ route }: any) => {
  return <MeetingWriteContainer route={route} isEdit={false} />;
};

export default MeetingWriteScreen;
