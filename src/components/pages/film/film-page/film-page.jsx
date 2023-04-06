import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import MovieCardBig from '../../../common-components/movie-card-big/movie-card-big';
import Header from '../../../common-components/header/header';
import MoviesList from '../../../common-components/movies-list/movies-list';
import Footer from '../../../common-components/footer/footer';
import MovieCardDesc from '../movie-card-desc/movie-card-desc';
import MovieCardInfo from '../movie-card-info/movie-card-info';
import {changeActiveNavItem} from '../../../../store/action';
import {filmProp, commentProp} from '../../../../props-types';
import {FilmsCount, AdditionalClassName} from '../../../../const';

const getFilmsLikeThis = (id, genre, films) => {
  return films.slice().filter((film) => film.genre === genre && film.id !== id);
};

const FilmPage = ({films, film, comments}) => {
  const {activeNavItem} = useSelector((state) => state.FILMS_ACTIONS);
  const {authorizationStatus} = useSelector((state) => state.USER);
  const {id, name, backgroundImage, genre} = film;
  const dispatch = useDispatch();
  const handleChangeActiveNavItem = (item) => dispatch(changeActiveNavItem(item));
  const filmsLikeThis = getFilmsLikeThis(id, genre, films);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <MovieCardBig src={backgroundImage} alt={name} />

          <h1 className="visually-hidden">WTW</h1>

          <Header additionalClassName={AdditionalClassName.HEADER.MOVIE_CARD} />

          <MovieCardDesc film={film} authorizationStatus={authorizationStatus}/>
        </div>

        <MovieCardInfo
          film={film}
          comments={comments}
          activeNavItem={activeNavItem}
          onClick={handleChangeActiveNavItem}
        />
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList films={filmsLikeThis} count={FilmsCount.FILMS_LIKE_THIS} />
        </section>

        <Footer />
      </div>
    </>
  );
};

FilmPage.propTypes = {
  film: filmProp,
  films: PropTypes.arrayOf(filmProp).isRequired,
  comments: PropTypes.arrayOf(commentProp).isRequired,
};

export default FilmPage;
