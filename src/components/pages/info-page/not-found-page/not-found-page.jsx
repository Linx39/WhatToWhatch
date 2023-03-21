import React from 'react';

import InfoPage from '../info-page';
import {InfoText, Patch} from '../../../../const';

const LINK_TEXT = `Вернуться на главную`;

const NotFoundPage = () => {
  return (
    <InfoPage infoText={InfoText.ERROR_404} linkTo={Patch.MAIN} linkText={LINK_TEXT} />
  );
};

export default NotFoundPage;
