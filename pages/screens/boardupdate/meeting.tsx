import React from 'react';
import MeetingWriteContainer from '../../../src/components/boardswrite/MeetingWrite/MeetingWrite.container';

const MeetingUpdateScreen = ({ route }: any) => {
  return <MeetingWriteContainer route={route} isEdit={true} />;
};

export default MeetingUpdateScreen;
