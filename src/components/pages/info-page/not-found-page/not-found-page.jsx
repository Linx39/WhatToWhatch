import React from 'react';

import InfoPage from '../info-page';
import {InfoText, AppRoute} from '../../../../const';

const LINK_TEXT = `Вернуться на главную`;

const NotFoundPage = () => {
  return (
    <InfoPage infoText={InfoText.PAGE_NOT_FOUND} linkTo={AppRoute.MAIN} linkText={LINK_TEXT} />
  );
};

export default NotFoundPage;
