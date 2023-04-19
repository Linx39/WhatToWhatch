import React from 'react';

import InfoPage from '../info-page';
import {InfoText, Patch} from '../../../../const';

const LINK_TEXT = `Вернуться на главную`;

const NotFoundPage = () => {
  return (
    <InfoPage infoText={InfoText.PAGE_NOT_FOUND} linkTo={Patch.MAIN} linkText={LINK_TEXT} />
  );
};

export default NotFoundPage;
