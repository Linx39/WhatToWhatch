import React from 'react';

import Info from '../info/info';
import {InfoText, Patch} from '../../../../const';

const LINK_TEXT = `Вернуться на главную`;

const NotFound = () => {
  return (
    <Info infoText={InfoText.ERROR_404} linkTo={Patch.MAIN} linkText={LINK_TEXT} />
  );
};

export default NotFound;
