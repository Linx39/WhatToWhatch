import React, {useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {changeGenre} from '../../../../store/action';
import {GENRE_DEFAULT, GENRE_COUNT} from '../../../../const';

const getUniqueGenres = (films) => {
  const genres = new Set(films.map(({genre}) => genre));

  return [GENRE_DEFAULT, ...genres];
};

const GenresList = () => {
  const {activeGenre} = useSelector((state) => state.FILMS_LIST_ACTIONS);
  const {films} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  const genres = useMemo(() => getUniqueGenres(films).slice(0, GENRE_COUNT));

  const handleGenreItemClick = (evt) => {
    const genreItem = evt.target.textContent;
    dispatch(changeGenre((genreItem)));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return (
          <li key={`genre-${index}`}
            className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}>
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
