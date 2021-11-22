import React from 'react';
import FreeBoardWriteContainer from '../../../src/components/boardswrite/FreeboardWrite/FreeboardWrite.container';

const FreeBoardWriteScreen = ({ route }: any) => {
  return <FreeBoardWriteContainer route={route} isEdit={false} />;
};

export default FreeBoardWriteScreen;
