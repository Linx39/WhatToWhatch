import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';

import {changeActiveNavItem} from '../../store/action';
import FilmsList from '../films-list/films-list';
import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import UserBlockNoSign from '../common-components/user-block-no-sign/user-block-no-sign';
import Copyright from '../common-components/copyright/copyright';
import NavList from './nav-list/nav-list';
import Overview from './overview/overview';
import Details from './details/details';
import Reviews from './reviews/reviews';
import Loading from './loading/loading';
import {fetchFilm, fetchComments} from '../../store/api-actions';
import {getActiveNavItem} from '../../store/app-actions/selectors';
import {getComments, getCommentsLoadedStatus, getFilm, getFilmLoadedStatus, getFilms} from '../../store/app-data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {filmProp, filmsProp, commentsProp} from '../props-types';
import {FilmsCount, NavItem, AuthorizationStatus} from '../../const';

const Film = (props) => {
  const {
    films,
    film,
    comments,
    activeNavItem,
    onNavItemClick,
    isFilmLoaded,
    onLoadFilm,
    isCommentsLoaded,
    onLoadComments,
    authorizationStatus,
    goMain,
    goMyList,
    goPlayer,
    goReview,
  } = props;

  const filmId = Number(useParams().id);

  useEffect(() => {
    if (!isFilmLoaded) {
      onLoadFilm(filmId);
    }

    if (!isCommentsLoaded) {
      onLoadComments(filmId);
    }
  }, [filmId, isFilmLoaded && isCommentsLoaded]);

  if (!isFilmLoaded || !isCommentsLoaded) {
    return (
      <Loading />
    );
  }

  const {
    id,
    name,
    posterImage,
    backgroundImage,
    genre,
    released,
  } = film;

  const handlePlayButtonClick = () => goPlayer(id);
  const handleAddReviewClick = () => goReview(id);

  const getActiveComponent = (navItem) => {
    switch (navItem) {
      case NavItem.OVERVIEW:
        return <Overview film={film} />;
      case NavItem.DETAILS:
        return <Details film={film} />;
      case NavItem.REVIEWS:
        return <Reviews comments={comments} />;
      default:
        throw new Error(`Unknown switch case expression: '${navItem}'!`);
    }
  };

  const filmsLikeThis = films.filter((item) => item.genre === genre && item.id !== id);

  return <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo onLogoClick={goMain} />

          {authorizationStatus === AuthorizationStatus.AUTH
            ? <UserBlock onAvatarClick={goMyList}/>
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
              <button className="btn btn--play movie-card__button" type="button" onClick={handlePlayButtonClick}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              {authorizationStatus === AuthorizationStatus.AUTH
                &&
              <Link to="#" onClick={handleAddReviewClick} className="btn movie-card__button">Add review</Link>}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={{name} + ` poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <NavList
              activeNavItem={activeNavItem}
              onClick={onNavItemClick}
            />

            {getActiveComponent(activeNavItem)}
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          <FilmsList films={filmsLikeThis} count={FilmsCount.FILMS} />
        </div>
      </section>

      <footer className="page-footer">
        <Logo
          onLogoClick={goMain}
          isAddClass={true}
        />

        <Copyright />
      </footer>
    </div>
  </React.Fragment>;
};

Film.propTypes = {
  films: filmsProp,
  film: filmProp,
  comments: commentsProp,
  activeNavItem: PropTypes.string.isRequired,
  onNavItemClick: PropTypes.func.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  onLoadFilm: PropTypes.func.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  goMain: PropTypes.func.isRequired,
  goMyList: PropTypes.func.isRequired,
  goPlayer: PropTypes.func.isRequired,
  goReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  film: getFilm(state),
  isFilmLoaded: getFilmLoadedStatus(state),
  comments: getComments(state),
  isCommentsLoaded: getCommentsLoadedStatus(state),
  activeNavItem: getActiveNavItem(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onNavItemClick(item) {
    dispatch(changeActiveNavItem(item));
  },
  onLoadFilm(id) {
    dispatch(fetchFilm(id));
  },
  onLoadComments(id) {
    dispatch(fetchComments(id));
  },
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
