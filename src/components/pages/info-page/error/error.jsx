import React from 'react';

import Info from '../info/info';
import {InfoText} from '../../../../const';

const Error = () => {
  return (
    <Info infoText={InfoText.LOADING_ERROR} />
  );
};

export default Error;
