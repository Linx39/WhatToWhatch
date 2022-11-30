import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const GenresList = (props) => {
  const {genres, activeGenre, onClick} = props;

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
  genres: PropTypes.array,
  activeGenre: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default GenresList;
