import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main';

const App = (props) => {
  const {cardsCount, movieCard} = props;

  return (
    <Main cardsCount={cardsCount} movieCard={movieCard} />
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  movieCard: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
  }).isRequired,
};
export default App;
