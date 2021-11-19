import React from 'react';
import SharingInfoWriteContainer from '../../../src/components/boardswrite/SharinginfoWrite/SharinginfoWrite.container';

const SharingInfoUpdateScreen = ({ route }: any) => {
  return <SharingInfoWriteContainer route={route} isEdit={true} />;
};

export default SharingInfoUpdateScreen;
