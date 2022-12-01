import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {filmsProp} from '../props-types';
import {GENRE_DEFAULT} from '../../const';

const getUniqueGenres = (films) => { // сделать чеоез редусер
  const uniqueGenres = [GENRE_DEFAULT];

  films.forEach((film) => {
    if (!uniqueGenres.find((genre) => genre === film.genre)) {
      uniqueGenres.push(film.genre);
    }
  });

  return uniqueGenres;
};

const GenresList = (props) => {
  const {films, activeGenre, onClick} = props;

  const genres = getUniqueGenres(films);

  const handleMouseClick = (evt) => onClick(evt.target.textContent);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li key={`genre-${index}`}
          className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}>
          <Link to="#"
            className="catalog__genres-link"
            onClick={handleMouseClick}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  films: filmsProp,
  activeGenre: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default GenresList;
