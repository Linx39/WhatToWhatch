import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const GenresList = (props) => {
  const {genres, activeGenreItem, onClick} = props;

  const handleMouseClick = (evt) => onClick(evt.target.innerHTML);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li key={`genre-${index}`}
          className={`catalog__genres-item ${activeGenreItem === genre ? `catalog__genres-item--active` : ``}`}>
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
  activeGenreItem: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default GenresList;
