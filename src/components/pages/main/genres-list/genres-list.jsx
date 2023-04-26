import React, {useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {changeGenre, resetOnDefaultMainPage} from '../../../../store/action';
import {getUniqueGenres} from '../../../../utils';
import {GENRE_DEFAULT} from '../../../../const';

const GenresList = () => {
  const {activeGenre} = useSelector((state) => state.APP_ACTIONS);
  const {filmsData} = useSelector((state) => state.DATA);
  const {data: films} = filmsData;
  const dispatch = useDispatch();
  const handleGenreItemClick = (evt) => {
    const genreItem = evt.target.textContent;
    dispatch(changeGenre((genreItem)));

    if (genreItem === GENRE_DEFAULT) {
      dispatch(resetOnDefaultMainPage());
    }
  };
  const genres = useMemo(() => getUniqueGenres(films));

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
