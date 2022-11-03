import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS_COUNT: 20
};

const MovieCard = {
  title: `The Grand Budapest Hotelll`,
  genre: `Dramama`,
  year: 2015,
};


ReactDOM.render(
    <App
      cardsCount={Setting.CARDS_COUNT}
      movieCard={MovieCard}
    />,
    document.querySelector(`#root`)
);
