import React from 'react';

import InfoPage from '../info-page';
import {InfoText} from '../../../const';

const LoadingPage = () => {
  return (
    <InfoPage messageText={InfoText.LOADING} />
  );
};

export default LoadingPage;
