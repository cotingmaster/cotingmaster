import React from 'react';
import WriteContainer from '../commonWrite/Write.container';

const FreeBoardWriteContainer = (props: any) => {
  return (
    <WriteContainer
      board={'Freeboard'}
      isEdit={props.isEdit}
      route={props.route}
    />
  );
};

export default FreeBoardWriteContainer;
