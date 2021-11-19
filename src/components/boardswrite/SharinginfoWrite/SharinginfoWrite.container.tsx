import React from 'react';
import WriteContainer from '../commonWrite/Write.container';

const SharingInfoWriteContainer = (props: any) => {
  return (
    <WriteContainer
      board={'SharingInfo'}
      isEdit={props.isEdit}
      route={props.route}
    />
  );
};

export default SharingInfoWriteContainer;
