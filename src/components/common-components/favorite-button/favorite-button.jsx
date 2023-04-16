import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {fetchChangeFilmStatus} from '../../../store/api-actions';
import {redirectToRoute, resetLoadedFilms, resetLoadedPromoFilm, resetLoadedFavoriteFilms} from '../../../store/action';
import {AuthorizationStatus, Patch} from '../../../const';
import {filmProp} from '../../../props-types';

const FavoriteButton = ({film, onLoadData}) => {
  const {id, isFavorite} = film;
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const handleChangeFilmStatus = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      dispatch(redirectToRoute((Patch.LOGIN)));
      return;
    }

    dispatch(fetchChangeFilmStatus(id, Number(!isFavorite)))
    .then((data) => dispatch(onLoadData(data)))
    .then(() => {
      dispatch(resetLoadedFilms());
      dispatch(resetLoadedPromoFilm());
      dispatch(resetLoadedFavoriteFilms());
    });
  };

  return (
    <button onClick={handleChangeFilmStatus} className='btn btn--list movie-card__button' type='button'>
      <svg viewBox='0 0 19 20' width='19' height='20'>
        {isFavorite
          ? <use xlinkHref="#in-list"></use>
          : <use xlinkHref="#add"></use>
        }
      </svg>
      <span>My list</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  film: filmProp,
  onLoadData: PropTypes.func.isRequired,
};

export default FavoriteButton;
