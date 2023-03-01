import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import FilmsList from '../films-list/films-list';
import LogoHeader from '../common-components/logo/logo-header';
import LogoFooter from '../common-components/logo/logo-footer';
import UserBlock from '../common-components/user-block/user-block';
import UserBlockNoSign from '../common-components/user-block-no-sign/user-block-no-sign';
import Copyright from '../common-components/copyright/copyright';
import NavList from './nav-list/nav-list';
import Overview from './overview/overview';
import Details from './details/details';
import Reviews from './reviews/reviews';
import AddReviewButton from './add-review-button/add-review-button';
import Loading from '../common-components/loading/loading';
import PlayButton from '../common-components/play-button/play-button';
import AddFavoriteButton from '../common-components/add-favorite-button/add-favorite-button';
import {fetchFilms, fetchFilm, fetchComments} from '../../store/api-actions';
import {changeActiveNavItem} from '../../store/action';
import {FilmsCount, NavItem, AuthorizationStatus, AddFavoriteFetchType} from '../../const';

const Film = () => {
  const {films, isFilmsLoaded, film, isFilmLoaded, comments, isCommentsLoaded} = useSelector((state) => state.DATA);
  const {activeNavItem} = useSelector((state) => state.FILM_INFO_ACTIONS);
  const {authorizationStatus} = useSelector((state) => state.USER);

  const dispatch = useDispatch();
  const onLoadFilms = () => dispatch(fetchFilms());
  const onLoadFilm = (id) => dispatch(fetchFilm(id));
  const onLoadComments = (id) => dispatch(fetchComments(id));
  const onChangeActiveNavItem = (item) => dispatch(changeActiveNavItem(item));

  const paramsId = Number(useParams().id);

  useEffect(() => {
    if (!isFilmsLoaded) {
      onLoadFilms();
    }

    if (!isFilmLoaded) {
      onLoadFilm(paramsId);
    }

    if (!isCommentsLoaded) {
      onLoadComments(paramsId);
    }
  }, [isFilmsLoaded, isFilmLoaded, isCommentsLoaded]);

  if (!isFilmsLoaded || !isFilmLoaded || !isCommentsLoaded) {
    return (
      <Loading />
    );
  }

  const {id, name, posterImage, backgroundImage, genre, released} = film;

  const getActiveComponent = (item) => {
    switch (item) {
      case NavItem.OVERVIEW:
        return <Overview film={film} />;
      case NavItem.DETAILS:
        return <Details film={film} />;
      case NavItem.REVIEWS:
        return <Reviews comments={comments} />;
      default:
        throw new Error(`Unknown switch case expression: '${item}'!`);
    }
  };

  const filmsLikeThis = films.slice().filter((item) => item.genre === genre && item.id !== id);

  return <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <LogoHeader />

          {authorizationStatus === AuthorizationStatus.AUTH
            ? <UserBlock />
            : <UserBlockNoSign />
          }
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <PlayButton film={film}/>

              <AddFavoriteButton film={film} fetchType={AddFavoriteFetchType.FILM} />

              {authorizationStatus === AuthorizationStatus.AUTH
                &&
                <AddReviewButton film={film}/>
              }
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <NavList
              activeNavItem={activeNavItem}
              onClick={onChangeActiveNavItem}
            />

            {getActiveComponent(activeNavItem)}
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <FilmsList films={filmsLikeThis} count={FilmsCount.FILMS_LIKE_THIS} />
      </section>

      <footer className="page-footer">
        <LogoFooter />

        <Copyright />
      </footer>
    </div>
  </React.Fragment>;
};

export default Film;
