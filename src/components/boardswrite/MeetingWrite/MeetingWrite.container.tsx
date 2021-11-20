import React from 'react';
import WriteContainer from '../commonWrite/Write.container';

const MeetingWriteContainer = (props: any) => {
  return (
    <WriteContainer
      board={'Meeting'}
      isEdit={props.isEdit}
      route={props.route}
    />
  );
};

export default MeetingWriteContainer;
