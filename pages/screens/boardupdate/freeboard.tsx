import React from 'react';
import FreeBoardWriteContainer from '../../../src/components/boardswrite/FreeboardWrite/FreeboardWrite.container';

const FreeBoardUpdateScreen = ({ route }: any) => {
  return <FreeBoardWriteContainer route={route} isEdit={true} />;
};

export default FreeBoardUpdateScreen;
