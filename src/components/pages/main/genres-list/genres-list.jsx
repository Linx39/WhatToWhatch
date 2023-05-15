import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {clsx} from 'clsx';

import {getGenresList} from '../../../../store/app-data/selectors';
import {getActiveGenre} from '../../../../store/app-actions/selectors';
import {changeGenre, resetOnDefaultMainPage} from '../../../../store/action';
import {Genre} from '../../../../const';

const GenresList = () => {
  const genres = useSelector(getGenresList);
  const activeGenre = useSelector(getActiveGenre);
  const dispatch = useDispatch();

  const handleGenreItemClick = (evt) => {
    const genreItem = evt.target.textContent;
    dispatch(changeGenre((genreItem)));

    if (genreItem === Genre.DEFAULT) {
      dispatch(resetOnDefaultMainPage());
    }
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return (
          <li key={`genre-${index}`}
            className={clsx(`catalog__genres-item`, activeGenre === genre && `catalog__genres-item--active`)}>
            <Link to="#"
              className="catalog__genres-link"
              onClick={handleGenreItemClick}
            >
              {genre}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default GenresList;
