import React from 'react';

import InfoPage from '../info-page';
import {InfoText} from '../../../const';

const ErrorPage = () => {
  return (
    <InfoPage messageText={InfoText.LOADING_ERROR} />
  );
};

export default ErrorPage;
