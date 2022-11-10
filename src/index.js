import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import films from './mocks/films';

const Setting = {
  CARDS_COUNT: 8
};

ReactDOM.render(
    <App
      cardsCount={Setting.CARDS_COUNT}
      movieCards={films}
    />,
    document.querySelector(`#root`)
);
