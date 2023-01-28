import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {changeGenre, getFilmsList} from '../../../store/action';
import {GENRE_DEFAULT} from '../../../const';

const GENRE_COUNT = 10;

const getUniqueGenres = (films) => { // сделать чеоез редусер
  const uniqueGenres = [GENRE_DEFAULT];

  films.forEach((film) => {
    if (!uniqueGenres.find((genre) => genre === film.genre)) {
      uniqueGenres.push(film.genre);
    }
  });

  return uniqueGenres;
};

const filterFilmsByGenre = (genre, films) => {
  if (genre === GENRE_DEFAULT) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

const GenresList = () => {
  const {activeGenre} = useSelector((state) => state.FILMS_LIST_ACTIONS);
  const {films} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  const onGenreItemClick = (genre) => {
    dispatch(changeGenre(genre));
  };

  const onChangeFilmsList = (list) => {
    dispatch(getFilmsList(list));
  };

  const genres = getUniqueGenres(films).slice(0, GENRE_COUNT);

  const handleGenreItemClick = (evt) => {
    const genreItem = evt.target.textContent;
    const list = filterFilmsByGenre(genreItem, films);

    onGenreItemClick(evt.target.textContent);
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
