import React, {useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {changeGenre, changeFilmsList} from '../../../store/action';
import {getUniqueGenres, filterFilmsByGenre} from '../../component-utils';

const GENRE_COUNT = 10;

const GenresList = () => {
  const {activeGenre} = useSelector((state) => state.FILMS_LIST_ACTIONS);
  const {films} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();
  const onChangeGenre = (genre) => dispatch(changeGenre(genre));
  const onChangeFilmsList = (list) => dispatch(changeFilmsList(list));

  const genres = useMemo(() => getUniqueGenres(films).slice(0, GENRE_COUNT));

  const handleGenreItemClick = (evt) => {
    const genreItem = evt.target.textContent;
    const list = filterFilmsByGenre(genreItem, films); // reselect???

    onChangeGenre(evt.target.textContent);
    onChangeFilmsList(list);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li key={`genre-${index}`}
          className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}>
          <Link to="#"
            className="catalog__genres-link"
            onClick={handleGenreItemClick}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
